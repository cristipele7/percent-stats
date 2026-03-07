import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetLeaguesByCountryVariables = Types.Exact<{
    countryId: Types.Scalars['String']['input']
}>

export type GetLeaguesByCountry = {
    __typename?: 'Query'
    leaguesByCountry: Array<{ __typename?: 'League'; id: string; apiId: number; name: string }>
}

export type CreateLeagueVariables = Types.Exact<{
    data: Types.LeagueCreateInput
}>

export type CreateLeague = {
    __typename?: 'Mutation'
    createLeague: { __typename?: 'League'; id: string }
}

export type DeleteLeagueVariables = Types.Exact<{
    where: Types.LeagueWhereUniqueInput
}>

export type DeleteLeague = {
    __typename?: 'Mutation'
    deleteLeague: { __typename?: 'League'; id: string }
}

export const GetLeaguesByCountryDocument = /*#__PURE__*/ gql`
    query GetLeaguesByCountry($countryId: String!) {
        leaguesByCountry(countryId: $countryId) {
            id
            apiId
            name
        }
    }
`

/**
 * __useGetLeaguesByCountry__
 *
 * To run a query within a React component, call `useGetLeaguesByCountry` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaguesByCountry` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaguesByCountry({
 *   variables: {
 *      countryId: // value for 'countryId'
 *   },
 * });
 */
export function useGetLeaguesByCountry(
    baseOptions: Apollo.QueryHookOptions<GetLeaguesByCountry, GetLeaguesByCountryVariables> &
        ({ variables: GetLeaguesByCountryVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetLeaguesByCountry, GetLeaguesByCountryVariables>(
        GetLeaguesByCountryDocument,
        options,
    )
}
export function useGetLeaguesByCountryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetLeaguesByCountry, GetLeaguesByCountryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetLeaguesByCountry, GetLeaguesByCountryVariables>(
        GetLeaguesByCountryDocument,
        options,
    )
}
// @ts-ignore
export function useGetLeaguesByCountrySuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GetLeaguesByCountry,
        GetLeaguesByCountryVariables
    >,
): Apollo.UseSuspenseQueryResult<GetLeaguesByCountry, GetLeaguesByCountryVariables>
export function useGetLeaguesByCountrySuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetLeaguesByCountry, GetLeaguesByCountryVariables>,
): Apollo.UseSuspenseQueryResult<GetLeaguesByCountry | undefined, GetLeaguesByCountryVariables>
export function useGetLeaguesByCountrySuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetLeaguesByCountry, GetLeaguesByCountryVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetLeaguesByCountry, GetLeaguesByCountryVariables>(
        GetLeaguesByCountryDocument,
        options,
    )
}
export type GetLeaguesByCountryHookResult = ReturnType<typeof useGetLeaguesByCountry>
export type GetLeaguesByCountryLazyQueryHookResult = ReturnType<
    typeof useGetLeaguesByCountryLazyQuery
>
export type GetLeaguesByCountrySuspenseQueryHookResult = ReturnType<
    typeof useGetLeaguesByCountrySuspenseQuery
>
export type GetLeaguesByCountryQueryResult = Apollo.QueryResult<
    GetLeaguesByCountry,
    GetLeaguesByCountryVariables
>
export const CreateLeagueDocument = /*#__PURE__*/ gql`
    mutation CreateLeague($data: LeagueCreateInput!) {
        createLeague(data: $data) {
            id
        }
    }
`
export type CreateLeagueMutationFn = Apollo.MutationFunction<CreateLeague, CreateLeagueVariables>

/**
 * __useCreateLeague__
 *
 * To run a mutation, you first call `useCreateLeague` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeague` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeague, { data, loading, error }] = useCreateLeague({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLeague(
    baseOptions?: Apollo.MutationHookOptions<CreateLeague, CreateLeagueVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<CreateLeague, CreateLeagueVariables>(CreateLeagueDocument, options)
}
export type CreateLeagueHookResult = ReturnType<typeof useCreateLeague>
export type CreateLeagueMutationResult = Apollo.MutationResult<CreateLeague>
export type CreateLeagueMutationOptions = Apollo.BaseMutationOptions<
    CreateLeague,
    CreateLeagueVariables
>
export const DeleteLeagueDocument = /*#__PURE__*/ gql`
    mutation DeleteLeague($where: LeagueWhereUniqueInput!) {
        deleteLeague(where: $where) {
            id
        }
    }
`
export type DeleteLeagueMutationFn = Apollo.MutationFunction<DeleteLeague, DeleteLeagueVariables>

/**
 * __useDeleteLeague__
 *
 * To run a mutation, you first call `useDeleteLeague` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLeague` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLeague, { data, loading, error }] = useDeleteLeague({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteLeague(
    baseOptions?: Apollo.MutationHookOptions<DeleteLeague, DeleteLeagueVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<DeleteLeague, DeleteLeagueVariables>(DeleteLeagueDocument, options)
}
export type DeleteLeagueHookResult = ReturnType<typeof useDeleteLeague>
export type DeleteLeagueMutationResult = Apollo.MutationResult<DeleteLeague>
export type DeleteLeagueMutationOptions = Apollo.BaseMutationOptions<
    DeleteLeague,
    DeleteLeagueVariables
>
