import React, { useState } from 'react'
import { StyleSheet, Button } from 'react-native'
import {
    CREATE_LEAGUE_MUTATION,
    DELETE_LEAGUE_MUTATION,
    GET_LEAGUES_BY_COUNTRY_QUERY,
} from 'api/league/league.gql'
import { useMutation, useQuery } from '@apollo/client/react'
import { League, Mutation, MutationCreateLeagueArgs, MutationDeleteLeagueArgs } from 'api/types'
import { useTranslation } from 'react-i18next'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'
import ButtonLink from '../../components/ButtonLink'
import { PAGES } from 'src/constants/pages'
import { useParams } from 'react-router-native'

const LeaguesPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)
    const { countryId } = useParams<{ countryId: string }>()

    const [leagueName, setLeagueName] = useState('')
    const [leagueApiId, setLeagueApiId] = useState<number>(null)

    const {
        data: leaguesData,
        loading,
        error,
    } = useQuery<{ leaguesByCountry: League[] }>(GET_LEAGUES_BY_COUNTRY_QUERY, {
        variables: { countryId },
        skip: !countryId,
    })

    const [createLeague, { loading: loadingCreate, error: createLeagueError }] = useMutation<
        { createLeague: Mutation['createLeague'] },
        MutationCreateLeagueArgs
    >(CREATE_LEAGUE_MUTATION)

    const [deleteLeague, { loading: loadingDelete, error: deleteLeagueError }] = useMutation<
        { deleteLeague: Mutation['deleteLeague'] },
        MutationDeleteLeagueArgs
    >(DELETE_LEAGUE_MUTATION)

    const onCreateLeague = () => {
        createLeague({
            variables: {
                data: {
                    apiId: leagueApiId,
                    name: leagueName,
                    country: { connect: { id: countryId } },
                },
            },
            refetchQueries: [
                { query: GET_LEAGUES_BY_COUNTRY_QUERY, variables: { countryId } },
                'GetLeaguesByCountry',
            ],
        }).then(() => {
            setLeagueName(null)
            setLeagueApiId(null)
        })
    }

    const onDeleteLeague = (id: string) => {
        deleteLeague({
            variables: {
                where: { id },
            },
            refetchQueries: [
                { query: GET_LEAGUES_BY_COUNTRY_QUERY, variables: { countryId } },
                'GetLeaguesByCountry',
            ],
        })
    }

    return (
        <CustomView style={styles.container}>
            <ButtonLink title={t('go_back_buttom_name')} toPage={PAGES.Admin} />
            <ButtonLink title={t('teams_buttom_name')} toPage={`${PAGES.Teams}/${countryId}`} />

            {loading && <CustomText style={themeStyles.title}>{t('loading_message')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}
            {createLeagueError && (
                <CustomText style={themeStyles.error}>{createLeagueError.message}</CustomText>
            )}
            {deleteLeagueError && (
                <CustomText style={themeStyles.error}>{deleteLeagueError.message}</CustomText>
            )}

            <CustomView style={styles.inputsContainer}>
                <CustomText>{t('league_name')}</CustomText>
                <input
                    style={styles.input}
                    value={leagueName ?? ''}
                    onChange={(e) => setLeagueName(e.target.value)}
                />
                <CustomText>{t('league_api_id')}</CustomText>
                <input
                    type="number"
                    style={styles.input}
                    value={leagueApiId ?? ''}
                    onChange={(e) => setLeagueApiId(+e.target.value)}
                />
            </CustomView>

            <Button
                title={t('create_league_button_name')}
                onPress={onCreateLeague}
                disabled={!leagueName || !leagueApiId || loadingCreate}
            />

            <CustomView style={styles.leaguesContainer}>
                {leaguesData?.leaguesByCountry?.map((league: League, index: number) => (
                    <CustomView key={league.id} style={styles.leagueContainer}>
                        <CustomView>
                            <CustomText>
                                {index + 1}.{' '}
                                <CustomText style={styles.leagueName}>{league.name}</CustomText> -{' '}
                                {league.apiId}
                            </CustomText>
                        </CustomView>
                        <Button
                            title={t('delete_button_name')}
                            onPress={() => onDeleteLeague(league.id)}
                            disabled={loadingDelete}
                        />
                    </CustomView>
                ))}
            </CustomView>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginBottom: 50,
    },
    leaguesContainer: {
        marginTop: 20,
    },
    leagueContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    leagueName: {
        display: 'contents',
    },
    inputsContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
    },
})

export default LeaguesPage
