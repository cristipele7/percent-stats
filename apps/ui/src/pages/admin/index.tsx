import React, { useState } from 'react'
import { StyleSheet, Button } from 'react-native'
import {
    CREATE_COUNTRY_MUTATION,
    DELETE_COUNTRY_MUTATION,
    GET_COUNTRIES_QUERY,
} from 'api/country/country.gql'
import { useMutation, useQuery } from '@apollo/client/react'
import { Country, Mutation, MutationCreateCountryArgs, MutationDeleteCountryArgs } from 'api/types'
import { useTranslation } from 'react-i18next'
import ButtonLink from '../../components/ButtonLink'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'
import { useNavigate } from 'react-router-native'
import { PAGES } from 'src/constants/pages'

const AdminPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const navigate = useNavigate()
    const themeStyles = getStyles(theme)

    const [countryName, setCountryName] = useState('')

    const {
        data: countriesData,
        loading,
        error,
    } = useQuery<{ countries: Country[] }>(GET_COUNTRIES_QUERY)

    const [createCountry, { loading: loadingCreate, error: createCountryError }] = useMutation<
        { createCountry: Mutation['createCountry'] },
        MutationCreateCountryArgs
    >(CREATE_COUNTRY_MUTATION)

    const [deleteCountry, { loading: loadingDelete, error: deleteCountryError }] = useMutation<
        { deleteCountry: Mutation['deleteCountry'] },
        MutationDeleteCountryArgs
    >(DELETE_COUNTRY_MUTATION)

    const onCreateCountry = () => {
        createCountry({
            variables: {
                data: {
                    name: countryName,
                },
            },
            refetchQueries: [{ query: GET_COUNTRIES_QUERY }, 'GetCountries'],
        }).then(() => {
            setCountryName(null)
        })
    }

    const onDeleteCountry = (id: string) => {
        deleteCountry({
            variables: {
                where: { id },
            },
            refetchQueries: [{ query: GET_COUNTRIES_QUERY }, 'GetCountries'],
        })
    }

    return (
        <CustomView style={styles.container}>
            <ButtonLink title={t('back_home_buttom_name')} toPage={PAGES.Home} />

            {loading && <CustomText style={themeStyles.title}>{t('loading_message')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}
            {createCountryError && (
                <CustomText style={themeStyles.error}>{createCountryError.message}</CustomText>
            )}
            {deleteCountryError && (
                <CustomText style={themeStyles.error}>{deleteCountryError.message}</CustomText>
            )}

            {countriesData?.countries?.map((country: Country, index: number) => (
                <CustomView key={country.id} style={styles.countryContainer}>
                    <CustomView>
                        <CustomText>
                            {index + 1}.{' '}
                            <CustomText
                                style={styles.countryName}
                                onPress={() => navigate(`${PAGES.Leagues}/${country.id}`)}
                            >
                                {country.name}
                            </CustomText>
                        </CustomText>
                    </CustomView>
                    <Button
                        title={t('delete_button_name')}
                        onPress={() => onDeleteCountry(country.id)}
                        disabled={loadingDelete}
                    />
                </CustomView>
            ))}

            <CustomView style={styles.inputsContainer}>
                <CustomText>{t('country_name')}</CustomText>
                <input
                    style={styles.input}
                    value={countryName ?? ''}
                    onChange={(e) => setCountryName(e.target.value)}
                />
            </CustomView>

            <Button
                title={t('create_country_button_name')}
                onPress={onCreateCountry}
                disabled={!countryName || loadingCreate}
            />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginBottom: 50,
    },
    countryContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    countryName: {
        display: 'contents',
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
    inputsContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
    },
})

export default AdminPage
