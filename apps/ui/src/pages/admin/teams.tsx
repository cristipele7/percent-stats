import React, { useState } from 'react'
import { StyleSheet, Button } from 'react-native'
import {
    CREATE_TEAM_MUTATION,
    DELETE_TEAM_MUTATION,
    GET_TEAMS_BY_COUNTRY_QUERY,
} from 'api/team/team.gql'
import { useMutation, useQuery } from '@apollo/client/react'
import { Team, Mutation, MutationCreateTeamArgs, MutationDeleteTeamArgs } from 'api/types'
import { useTranslation } from 'react-i18next'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'
import ButtonLink from '../../components/ButtonLink'
import { PAGES } from 'src/constants/pages'
import { useParams } from 'react-router-native'

const TeamsPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)
    const { countryId } = useParams<{ countryId: string }>()

    const [teamName, setTeamName] = useState('')
    const [teamApiId, setTeamApiId] = useState<number>(null)

    const {
        data: teamsData,
        loading,
        error,
    } = useQuery<{ teamsByCountry: Team[] }>(GET_TEAMS_BY_COUNTRY_QUERY, {
        variables: { countryId },
        skip: !countryId,
    })

    const [createTeam, { loading: loadingCreate, error: createTeamError }] = useMutation<
        { createTeam: Mutation['createTeam'] },
        MutationCreateTeamArgs
    >(CREATE_TEAM_MUTATION)

    const [deleteTeam, { loading: loadingDelete, error: deleteTeamError }] = useMutation<
        { deleteTeam: Mutation['deleteTeam'] },
        MutationDeleteTeamArgs
    >(DELETE_TEAM_MUTATION)

    const onCreateTeam = () => {
        createTeam({
            variables: {
                data: {
                    apiId: teamApiId,
                    name: teamName,
                    country: { connect: { id: countryId } },
                },
            },
            refetchQueries: [
                { query: GET_TEAMS_BY_COUNTRY_QUERY, variables: { countryId } },
                'GetTeamsByCountry',
            ],
        }).then(() => {
            setTeamName(null)
            setTeamApiId(null)
        })
    }

    const onDeleteTeam = (id: string) => {
        deleteTeam({
            variables: {
                where: { id },
            },
            refetchQueries: [
                { query: GET_TEAMS_BY_COUNTRY_QUERY, variables: { countryId } },
                'GetTeamsByCountry',
            ],
        })
    }

    return (
        <CustomView style={styles.container}>
            <ButtonLink title={t('go_back_buttom_name')} toPage={`${PAGES.Leagues}/${countryId}`} />

            {loading && <CustomText style={themeStyles.title}>{t('loading_message')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}
            {createTeamError && (
                <CustomText style={themeStyles.error}>{createTeamError.message}</CustomText>
            )}
            {deleteTeamError && (
                <CustomText style={themeStyles.error}>{deleteTeamError.message}</CustomText>
            )}

            <CustomView style={styles.inputsContainer}>
                <CustomText>{t('team_name')}</CustomText>
                <input
                    style={styles.input}
                    value={teamName ?? ''}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <CustomText>{t('team_api_id')}</CustomText>
                <input
                    type="number"
                    style={styles.input}
                    value={teamApiId ?? ''}
                    onChange={(e) => setTeamApiId(+e.target.value)}
                />
            </CustomView>

            <Button
                title={t('create_team_button_name')}
                onPress={onCreateTeam}
                disabled={!teamName || !teamApiId || loadingCreate}
            />

            <CustomView style={styles.teamsContainer}>
                {teamsData?.teamsByCountry?.map((team: Team, index: number) => (
                    <CustomView key={team.id} style={styles.teamContainer}>
                        <CustomView>
                            <CustomText>
                                {index + 1}.{' '}
                                <CustomText style={styles.teamName}>{team.name}</CustomText> -{' '}
                                {team.apiId}
                            </CustomText>
                        </CustomView>
                        <Button
                            title={t('delete_button_name')}
                            onPress={() => onDeleteTeam(team.id)}
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
    teamsContainer: {
        marginTop: 20,
    },
    teamContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    teamName: {
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

export default TeamsPage
