import { gql } from '@apollo/client'

export const GET_TEAMS_BY_COUNTRY_QUERY = gql`
    query GetTeamsByCountry($countryId: String!) {
        teamsByCountry(countryId: $countryId) {
            id
            apiId
            name
        }
    }
`

export const CREATE_TEAM_MUTATION = gql`
    mutation CreateTeam($data: TeamCreateInput!) {
        createTeam(data: $data) {
            id
        }
    }
`

export const DELETE_TEAM_MUTATION = gql`
    mutation DeleteTeam($where: TeamWhereUniqueInput!) {
        deleteTeam(where: $where) {
            id
        }
    }
`
