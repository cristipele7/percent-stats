import React from 'react'
import { StyleSheet } from 'react-native'
import { GET_MATCHES_BY_DATE_QUERY } from 'api/match/match.gql'
import { useQuery } from '@apollo/client/react'
import { Match } from 'api/types'
import { useTranslation } from 'react-i18next'
import ButtonLink from '../../components/ButtonLink'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'
import { PAGES } from 'src/constants/pages'

const MatchesPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    const date = new Date().toISOString().split('T')[0]
    const {
        data: matchesData,
        loading,
        error,
    } = useQuery<{ matchesByDate: Match[] }>(GET_MATCHES_BY_DATE_QUERY, {
        variables: { date },
    })

    return (
        <CustomView style={styles.container}>
            <ButtonLink title={t('back_home_buttom_name')} toPage={PAGES.Home} />

            {loading && <CustomText style={themeStyles.title}>{t('loading_message')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}

            <CustomView style={styles.matchesContainer}>
                {matchesData?.matchesByDate?.map((match: Match) => (
                    <CustomView key={match.id} style={styles.matchContainer}>
                        <CustomView>
                            <CustomText>
                                {match.state} - {match.homeTeam.name} vs {match.awayTeam.name} -{' '}
                                {match.league.name} - ({match.homeTeamGoals} : {match.awayTeamGoals}
                                )
                            </CustomText>
                        </CustomView>
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
    matchesContainer: {
        marginTop: 20,
    },
    matchContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
})

export default MatchesPage
