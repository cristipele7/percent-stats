import { gql } from '@apollo/client'

export const GET_MATCHES_BY_DATE_QUERY = gql`
    query GetMatchesByDate($date: String!) {
        matchesByDateFromAPI(date: $date) {
            fixture {
                id
                date
                status {
                    short
                }
            }
            league {
                name
                country
            }
            teams {
                home {
                    name
                }
                away {
                    name
                }
            }
            goals {
                home
                away
            }
        }
    }
`

export const GET_MATCHES_FOR_TEAMS_QUERY = gql`
    query GetMatchesForTeams($homeTeamId: String!, $awayTeamId: String!) {
        allMatchesForTeams(homeTeamId: $homeTeamId, awayTeamId: $awayTeamId) {
            id
            date
            state
            homeTeamGoals
            awayTeamGoals
            league {
                id
                name
            }
            homeTeam {
                id
                name
            }
            awayTeam {
                id
                name
            }
        }
    }
`

export const GET_MATCH_BY_API_ID_QUERY = gql`
    query GetMatchByApiId($apiId: Float!) {
        matchByApiId(apiId: $apiId) {
            id
            date
            state
            homeTeamId
            awayTeamId
            homeTeamGoals
            awayTeamGoals
            league {
                name
            }
            homeTeam {
                name
                apiId
                synced
            }
            awayTeam {
                name
                apiId
                synced
            }
        }
    }
`

export const CREATE_MATCH_FROM_API_MUTATION = gql`
    mutation CreateMatchFromAPI($apiId: Float!, $unsyncedTeamApiId: Float) {
        createMatchFromAPI(apiId: $apiId, unsyncedTeamApiId: $unsyncedTeamApiId) {
            id
            date
            state
            homeTeamGoals
            awayTeamGoals
            league {
                name
            }
            homeTeam {
                name
            }
            awayTeam {
                name
            }
        }
    }
`
