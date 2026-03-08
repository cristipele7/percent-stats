import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetTeamsByCountryVariables = Types.Exact<{
    countryId: Types.Scalars['String']['input']
}>

export type GetTeamsByCountry = {
    __typename?: 'Query'
    teamsByCountry: Array<{ __typename?: 'Team'; id: string; apiId: number; name: string }>
}

export type CreateTeamVariables = Types.Exact<{
    data: Types.TeamCreateInput
}>

export type CreateTeam = {
    __typename?: 'Mutation'
    createTeam: { __typename?: 'Team'; id: string }
}

export type DeleteTeamVariables = Types.Exact<{
    where: Types.TeamWhereUniqueInput
}>

export type DeleteTeam = {
    __typename?: 'Mutation'
    deleteTeam: { __typename?: 'Team'; id: string }
}

export const GetTeamsByCountryDocument = /*#__PURE__*/ gql`
    query GetTeamsByCountry($countryId: String!) {
        teamsByCountry(countryId: $countryId) {
            id
            apiId
            name
        }
    }
`

/**
 * __useGetTeamsByCountry__
 *
 * To run a query within a React component, call `useGetTeamsByCountry` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsByCountry` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsByCountry({
 *   variables: {
 *      countryId: // value for 'countryId'
 *   },
 * });
 */
export function useGetTeamsByCountry(
    baseOptions: Apollo.QueryHookOptions<GetTeamsByCountry, GetTeamsByCountryVariables> &
        ({ variables: GetTeamsByCountryVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetTeamsByCountry, GetTeamsByCountryVariables>(
        GetTeamsByCountryDocument,
        options,
    )
}
export function useGetTeamsByCountryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsByCountry, GetTeamsByCountryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetTeamsByCountry, GetTeamsByCountryVariables>(
        GetTeamsByCountryDocument,
        options,
    )
}
// @ts-ignore
export function useGetTeamsByCountrySuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetTeamsByCountry, GetTeamsByCountryVariables>,
): Apollo.UseSuspenseQueryResult<GetTeamsByCountry, GetTeamsByCountryVariables>
export function useGetTeamsByCountrySuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetTeamsByCountry, GetTeamsByCountryVariables>,
): Apollo.UseSuspenseQueryResult<GetTeamsByCountry | undefined, GetTeamsByCountryVariables>
export function useGetTeamsByCountrySuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetTeamsByCountry, GetTeamsByCountryVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetTeamsByCountry, GetTeamsByCountryVariables>(
        GetTeamsByCountryDocument,
        options,
    )
}
export type GetTeamsByCountryHookResult = ReturnType<typeof useGetTeamsByCountry>
export type GetTeamsByCountryLazyQueryHookResult = ReturnType<typeof useGetTeamsByCountryLazyQuery>
export type GetTeamsByCountrySuspenseQueryHookResult = ReturnType<
    typeof useGetTeamsByCountrySuspenseQuery
>
export type GetTeamsByCountryQueryResult = Apollo.QueryResult<
    GetTeamsByCountry,
    GetTeamsByCountryVariables
>
export const CreateTeamDocument = /*#__PURE__*/ gql`
    mutation CreateTeam($data: TeamCreateInput!) {
        createTeam(data: $data) {
            id
        }
    }
`
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeam, CreateTeamVariables>

/**
 * __useCreateTeam__
 *
 * To run a mutation, you first call `useCreateTeam` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeam` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeam, { data, loading, error }] = useCreateTeam({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTeam(
    baseOptions?: Apollo.MutationHookOptions<CreateTeam, CreateTeamVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<CreateTeam, CreateTeamVariables>(CreateTeamDocument, options)
}
export type CreateTeamHookResult = ReturnType<typeof useCreateTeam>
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeam>
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeam, CreateTeamVariables>
export const DeleteTeamDocument = /*#__PURE__*/ gql`
    mutation DeleteTeam($where: TeamWhereUniqueInput!) {
        deleteTeam(where: $where) {
            id
        }
    }
`
export type DeleteTeamMutationFn = Apollo.MutationFunction<DeleteTeam, DeleteTeamVariables>

/**
 * __useDeleteTeam__
 *
 * To run a mutation, you first call `useDeleteTeam` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTeam` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTeam, { data, loading, error }] = useDeleteTeam({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteTeam(
    baseOptions?: Apollo.MutationHookOptions<DeleteTeam, DeleteTeamVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<DeleteTeam, DeleteTeamVariables>(DeleteTeamDocument, options)
}
export type DeleteTeamHookResult = ReturnType<typeof useDeleteTeam>
export type DeleteTeamMutationResult = Apollo.MutationResult<DeleteTeam>
export type DeleteTeamMutationOptions = Apollo.BaseMutationOptions<DeleteTeam, DeleteTeamVariables>
