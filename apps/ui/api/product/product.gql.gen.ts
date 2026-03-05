import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetProductVariables = Types.Exact<{
    id: Types.Scalars['String']['input']
}>

export type GetProduct = {
    __typename?: 'Query'
    product: {
        __typename?: 'Product'
        type: Types.ProductType
        name?: string | null
        userId: string
        user: { __typename?: 'User'; name?: string | null }
    }
}

export type CreateProductVariables = Types.Exact<{
    data: Types.ProductCreateInput
}>

export type CreateProduct = {
    __typename?: 'Mutation'
    createProduct: { __typename?: 'Product'; id: string }
}

export type UpdateProductVariables = Types.Exact<{
    id: Types.Scalars['String']['input']
    data: Types.ProductUpdateInput
}>

export type UpdateProduct = {
    __typename?: 'Mutation'
    updateProduct: { __typename?: 'Product'; id: string }
}

export type RemoveProductVariables = Types.Exact<{
    id: Types.Scalars['String']['input']
}>

export type RemoveProduct = {
    __typename?: 'Mutation'
    removeProduct: { __typename?: 'Product'; id: string }
}

export const GetProductDocument = /*#__PURE__*/ gql`
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

/**
 * __useGetProduct__
 *
 * To run a query within a React component, call `useGetProduct` and pass it any options that fit your needs.
 * When your component renders, `useGetProduct` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProduct({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProduct(
    baseOptions: Apollo.QueryHookOptions<GetProduct, GetProductVariables> &
        ({ variables: GetProductVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetProduct, GetProductVariables>(GetProductDocument, options)
}
export function useGetProductLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProduct, GetProductVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetProduct, GetProductVariables>(GetProductDocument, options)
}
// @ts-ignore
export function useGetProductSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetProduct, GetProductVariables>,
): Apollo.UseSuspenseQueryResult<GetProduct, GetProductVariables>
export function useGetProductSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetProduct, GetProductVariables>,
): Apollo.UseSuspenseQueryResult<GetProduct | undefined, GetProductVariables>
export function useGetProductSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetProduct, GetProductVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetProduct, GetProductVariables>(GetProductDocument, options)
}
export type GetProductHookResult = ReturnType<typeof useGetProduct>
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>
export type GetProductSuspenseQueryHookResult = ReturnType<typeof useGetProductSuspenseQuery>
export type GetProductQueryResult = Apollo.QueryResult<GetProduct, GetProductVariables>
export const CreateProductDocument = /*#__PURE__*/ gql`
    mutation CreateProduct($data: ProductCreateInput!) {
        createProduct(data: $data) {
            id
        }
    }
`
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProduct, CreateProductVariables>

/**
 * __useCreateProduct__
 *
 * To run a mutation, you first call `useCreateProduct` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProduct` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProduct, { data, loading, error }] = useCreateProduct({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProduct(
    baseOptions?: Apollo.MutationHookOptions<CreateProduct, CreateProductVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<CreateProduct, CreateProductVariables>(CreateProductDocument, options)
}
export type CreateProductHookResult = ReturnType<typeof useCreateProduct>
export type CreateProductMutationResult = Apollo.MutationResult<CreateProduct>
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
    CreateProduct,
    CreateProductVariables
>
export const UpdateProductDocument = /*#__PURE__*/ gql`
    mutation UpdateProduct($id: String!, $data: ProductUpdateInput!) {
        updateProduct(where: { id: $id }, data: $data) {
            id
        }
    }
`
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProduct, UpdateProductVariables>

/**
 * __useUpdateProduct__
 *
 * To run a mutation, you first call `useUpdateProduct` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProduct` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProduct, { data, loading, error }] = useUpdateProduct({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProduct(
    baseOptions?: Apollo.MutationHookOptions<UpdateProduct, UpdateProductVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<UpdateProduct, UpdateProductVariables>(UpdateProductDocument, options)
}
export type UpdateProductHookResult = ReturnType<typeof useUpdateProduct>
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProduct>
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
    UpdateProduct,
    UpdateProductVariables
>
export const RemoveProductDocument = /*#__PURE__*/ gql`
    mutation RemoveProduct($id: String!) {
        removeProduct(where: { id: $id }) {
            id
        }
    }
`
export type RemoveProductMutationFn = Apollo.MutationFunction<RemoveProduct, RemoveProductVariables>

/**
 * __useRemoveProduct__
 *
 * To run a mutation, you first call `useRemoveProduct` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProduct` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProduct, { data, loading, error }] = useRemoveProduct({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveProduct(
    baseOptions?: Apollo.MutationHookOptions<RemoveProduct, RemoveProductVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<RemoveProduct, RemoveProductVariables>(RemoveProductDocument, options)
}
export type RemoveProductHookResult = ReturnType<typeof useRemoveProduct>
export type RemoveProductMutationResult = Apollo.MutationResult<RemoveProduct>
export type RemoveProductMutationOptions = Apollo.BaseMutationOptions<
    RemoveProduct,
    RemoveProductVariables
>
