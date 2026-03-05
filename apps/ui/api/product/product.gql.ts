import { gql } from '@apollo/client'

export const GET_PRODUCT_QUERY = gql`
    query GetProduct($id: String!) {
        product(where: { id: $id }) {
            type
            name
            userId
            user {
                name
            }
        }
    }
`

export const CREATE_PRODUCT_MUTATION = gql`
    mutation CreateProduct($data: ProductCreateInput!) {
        createProduct(data: $data) {
            id
        }
    }
`

export const UPDATE_PRODUCT_MUTATION = gql`
    mutation UpdateProduct($id: String!, $data: ProductUpdateInput!) {
        updateProduct(where: { id: $id }, data: $data) {
            id
        }
    }
`

export const REMOVE_PRODUCT_MUTATION = gql`
    mutation RemoveProduct($id: String!) {
        removeProduct(where: { id: $id }) {
            id
        }
    }
`
