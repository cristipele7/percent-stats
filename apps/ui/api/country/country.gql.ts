import { gql } from '@apollo/client'

export const GET_COUNTRIES_QUERY = gql`
    query GetCountries {
        countries {
            id
            apiId
            name
        }
    }
`

export const CREATE_COUNTRY_MUTATION = gql`
    mutation CreateCountry($data: CountryCreateInput!) {
        createCountry(data: $data) {
            id
        }
    }
`

export const DELETE_COUNTRY_MUTATION = gql`
    mutation DeleteCountry($where: CountryWhereUniqueInput!) {
        deleteCountry(where: $where) {
            id
        }
    }
`
