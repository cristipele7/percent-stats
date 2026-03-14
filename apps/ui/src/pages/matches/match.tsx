import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import {
    CREATE_MATCH_FROM_API_MUTATION,
    GET_MATCH_BY_API_ID_QUERY,
    GET_MATCHES_FOR_TEAMS_QUERY,
} from 'api/match/match.gql'
import { useMutation, useQuery } from '@apollo/client/react'
import { Match, Mutation, MutationCreateMatchFromApiArgs } from 'api/types'
import { useTranslation } from 'react-i18next'
import ButtonLink from '../../components/ButtonLink'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'
import { PAGES } from 'src/constants/pages'
import { getOriginalError } from 'src/utils/error'
import { useParams } from 'react-router-native'

const MatchPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)
    const { apiId } = useParams<{ apiId: string }>()

    const {
        data: matchData,
        loading,
        error,
    } = useQuery<{ matchByApiId: Match }>(GET_MATCH_BY_API_ID_QUERY, {
        variables: { apiId: Number(apiId) },
    })

    const {
        data: matchesForStats,
        loading: loadingMatchesForTeams,
        error: errorMatchesForTeams,
    } = useQuery<{ allMatchesForTeams: Match[] }>(GET_MATCHES_FOR_TEAMS_QUERY, {
        variables: {
            homeTeamId: matchData?.matchByApiId.homeTeamId,
            awayTeamId: matchData?.matchByApiId.awayTeamId,
        },
        skip: !matchData?.matchByApiId,
    })

    const [
        createMatchFromAPI,
        { loading: loadingCreateMatchFromAPI, error: createMatchFromAPIError },
    ] = useMutation<
        { createMatchFromAPI: Mutation['createMatchFromAPI'] },
        MutationCreateMatchFromApiArgs
    >(CREATE_MATCH_FROM_API_MUTATION)

    useEffect(() => {
        if (!error) return

        const { status } = getOriginalError(error)
        if (status !== 17404) return

        createMatchFromAPI({
            variables: { apiId: Number(apiId) },
            refetchQueries: [
                { query: GET_MATCH_BY_API_ID_QUERY, variables: { apiId: Number(apiId) } },
                'GetMatchByApiId',
            ],
        })
    }, [error])

    useEffect(() => {
        if (!matchData || loadingCreateMatchFromAPI) return

        const { homeTeam, awayTeam } = matchData.matchByApiId
        if (homeTeam.synced === awayTeam.synced) return

        const unsyncedTeamApiId = !homeTeam.synced ? homeTeam.apiId : awayTeam.apiId
        createMatchFromAPI({
            variables: { apiId: Number(apiId), unsyncedTeamApiId },
            refetchQueries: [
                {
                    query: GET_MATCHES_FOR_TEAMS_QUERY,
                    variables: {
                        homeTeamId: matchData?.matchByApiId.homeTeamId,
                        awayTeamId: matchData?.matchByApiId.awayTeamId,
                    },
                },
                'GetMatchesForTeams',
            ],
        })
    }, [matchData])

    return (
        <CustomView style={styles.container}>
            <ButtonLink title={t('go_back_buttom_name')} toPage={PAGES.Matches} />

            {(loading || loadingCreateMatchFromAPI || loadingMatchesForTeams) && (
                <CustomText style={themeStyles.title}>{t('loading_message')}</CustomText>
            )}
            {createMatchFromAPIError && (
                <CustomText style={themeStyles.error}>{createMatchFromAPIError.message}</CustomText>
            )}
            {errorMatchesForTeams && (
                <CustomText style={themeStyles.error}>{errorMatchesForTeams.message}</CustomText>
            )}

            {matchData && (
                <CustomView>
                    <CustomText>
                        {matchData.matchByApiId.homeTeam.name} vs{' '}
                        {matchData.matchByApiId.awayTeam.name}
                    </CustomText>
                </CustomView>
            )}

            <CustomText>{matchesForStats?.allMatchesForTeams?.length}</CustomText>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginBottom: 50,
    },
})

export default MatchPage
