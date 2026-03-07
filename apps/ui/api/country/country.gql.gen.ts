import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCountriesVariables = Types.Exact<{ [key: string]: never }>

export type GetCountries = {
    __typename?: 'Query'
    countries: Array<{ __typename?: 'Country'; id: string; name: string }>
}

export type CreateCountryVariables = Types.Exact<{
    data: Types.CountryCreateInput
}>

export type CreateCountry = {
    __typename?: 'Mutation'
    createCountry: { __typename?: 'Country'; id: string }
}

export type DeleteCountryVariables = Types.Exact<{
    where: Types.CountryWhereUniqueInput
}>

export type DeleteCountry = {
    __typename?: 'Mutation'
    deleteCountry: { __typename?: 'Country'; id: string }
}

export const GetCountriesDocument = /*#__PURE__*/ gql`
    query GetCountries {
        countries {
            id
            name
        }
    }
`

/**
 * __useGetCountries__
 *
 * To run a query within a React component, call `useGetCountries` and pass it any options that fit your needs.
 * When your component renders, `useGetCountries` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountries({
 *   variables: {
 *   },
 * });
 */
export function useGetCountries(
    baseOptions?: Apollo.QueryHookOptions<GetCountries, GetCountriesVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetCountries, GetCountriesVariables>(GetCountriesDocument, options)
}
export function useGetCountriesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetCountries, GetCountriesVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetCountries, GetCountriesVariables>(GetCountriesDocument, options)
}
// @ts-ignore
export function useGetCountriesSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetCountries, GetCountriesVariables>,
): Apollo.UseSuspenseQueryResult<GetCountries, GetCountriesVariables>
export function useGetCountriesSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetCountries, GetCountriesVariables>,
): Apollo.UseSuspenseQueryResult<GetCountries | undefined, GetCountriesVariables>
export function useGetCountriesSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetCountries, GetCountriesVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetCountries, GetCountriesVariables>(
        GetCountriesDocument,
        options,
    )
}
export type GetCountriesHookResult = ReturnType<typeof useGetCountries>
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>
export type GetCountriesSuspenseQueryHookResult = ReturnType<typeof useGetCountriesSuspenseQuery>
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountries, GetCountriesVariables>
export const CreateCountryDocument = /*#__PURE__*/ gql`
    mutation CreateCountry($data: CountryCreateInput!) {
        createCountry(data: $data) {
            id
        }
    }
`
export type CreateCountryMutationFn = Apollo.MutationFunction<CreateCountry, CreateCountryVariables>

/**
 * __useCreateCountry__
 *
 * To run a mutation, you first call `useCreateCountry` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCountry` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCountry, { data, loading, error }] = useCreateCountry({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCountry(
    baseOptions?: Apollo.MutationHookOptions<CreateCountry, CreateCountryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<CreateCountry, CreateCountryVariables>(CreateCountryDocument, options)
}
export type CreateCountryHookResult = ReturnType<typeof useCreateCountry>
export type CreateCountryMutationResult = Apollo.MutationResult<CreateCountry>
export type CreateCountryMutationOptions = Apollo.BaseMutationOptions<
    CreateCountry,
    CreateCountryVariables
>
export const DeleteCountryDocument = /*#__PURE__*/ gql`
    mutation DeleteCountry($where: CountryWhereUniqueInput!) {
        deleteCountry(where: $where) {
            id
        }
    }
`
export type DeleteCountryMutationFn = Apollo.MutationFunction<DeleteCountry, DeleteCountryVariables>

/**
 * __useDeleteCountry__
 *
 * To run a mutation, you first call `useDeleteCountry` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCountry` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCountry, { data, loading, error }] = useDeleteCountry({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteCountry(
    baseOptions?: Apollo.MutationHookOptions<DeleteCountry, DeleteCountryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<DeleteCountry, DeleteCountryVariables>(DeleteCountryDocument, options)
}
export type DeleteCountryHookResult = ReturnType<typeof useDeleteCountry>
export type DeleteCountryMutationResult = Apollo.MutationResult<DeleteCountry>
export type DeleteCountryMutationOptions = Apollo.BaseMutationOptions<
    DeleteCountry,
    DeleteCountryVariables
>
