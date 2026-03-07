import { gql } from '@apollo/client'

export const GET_LEAGUES_BY_COUNTRY_QUERY = gql`
    query GetLeaguesByCountry($countryId: String!) {
        leaguesByCountry(countryId: $countryId) {
            id
            apiId
            name
        }
    }
`

export const CREATE_LEAGUE_MUTATION = gql`
    mutation CreateLeague($data: LeagueCreateInput!) {
        createLeague(data: $data) {
            id
        }
    }
`

export const DELETE_LEAGUE_MUTATION = gql`
    mutation DeleteLeague($where: LeagueWhereUniqueInput!) {
        deleteLeague(where: $where) {
            id
        }
    }
`
