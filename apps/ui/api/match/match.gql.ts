import { gql } from '@apollo/client'

export const GET_MATCHES_BY_DATE_QUERY = gql`
    query GetMatchesByDate($date: String!) {
        matchesByDate(date: $date) {
            id
            apiId
            date
            state
            homeTeamGoals
            awayTeamGoals
            league {
                id
                apiId
                name
            }
            homeTeam {
                id
                apiId
                name
            }
            awayTeam {
                id
                apiId
                name
            }
        }
    }
`
