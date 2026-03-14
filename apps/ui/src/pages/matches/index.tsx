import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { GET_MATCHES_BY_DATE_QUERY } from 'api/match/match.gql'
import { useQuery } from '@apollo/client/react'
import { ApiFootballFixtureType } from 'api/types'
import { useTranslation } from 'react-i18next'
import ButtonLink from '../../components/ButtonLink'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'
import { PAGES } from 'src/constants/pages'
import { useNavigate } from 'react-router-native'
import dayjs from 'dayjs'

const MatchesPage = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    const date = dayjs().toISOString().split('T')[0]
    const {
        data: matchesData,
        loading,
        error,
    } = useQuery<{ matchesByDateFromAPI: ApiFootballFixtureType[] }>(GET_MATCHES_BY_DATE_QUERY, {
        variables: { date },
    })

    return (
        <CustomView style={styles.container}>
            <ButtonLink title={t('back_home_buttom_name')} toPage={PAGES.Home} />

            {loading && <CustomText style={themeStyles.title}>{t('loading_message')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}

            <CustomView style={styles.matchesContainer}>
                {matchesData?.matchesByDateFromAPI?.map((match: ApiFootballFixtureType) => (
                    <CustomView key={match.fixture.id} style={styles.matchContainer}>
                        <CustomText>
                            {dayjs(match.fixture.date).format('HH:mm')}. {match.league.country} -{' '}
                            {match.league.name} -&gt; {match.teams.home.name} vs{' '}
                            {match.teams.away.name} - {match.goals.home} : {match.goals.away} (
                            {match.fixture.status.short})
                        </CustomText>
                        <Button
                            title={t('info_button_name')}
                            onPress={() => navigate(`${PAGES.Match}/${match.fixture.id}`)}
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
