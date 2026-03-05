import { gql } from '@apollo/client'

export const GET_USERS_QUERY = gql`
    query GetUsers {
        users {
            id
            type
            name
        }
    }
`

export const GET_USER_QUERY = gql`
    query GetUser($id: String!) {
        user(where: { id: $id }) {
            type
            name
        }
    }
`

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($data: UserCreateInput!) {
        createUser(data: $data) {
            id
        }
    }
`

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($id: String!, $data: UserUpdateInput!) {
        updateUser(where: { id: $id }, data: $data) {
            id
        }
    }
`

export const REMOVE_USER_MUTATION = gql`
    mutation RemoveUser($id: String!) {
        removeUser(where: { id: $id }) {
            id
        }
    }
`
