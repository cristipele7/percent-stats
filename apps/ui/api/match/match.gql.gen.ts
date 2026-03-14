import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetMatchesByDateVariables = Types.Exact<{
    date: Types.Scalars['String']['input']
}>

export type GetMatchesByDate = {
    __typename?: 'Query'
    matchesByDateFromAPI: Array<{
        __typename?: 'ApiFootballFixtureType'
        fixture: {
            __typename?: 'FixtureInfo'
            id: number
            date: string
            status: { __typename?: 'FixtureStatus'; short: string }
        }
        league: { __typename?: 'FixtureLeague'; name: string; country: string }
        teams: {
            __typename?: 'FixtureTeams'
            home: { __typename?: 'FixtureTeam'; name: string }
            away: { __typename?: 'FixtureTeam'; name: string }
        }
        goals: { __typename?: 'FixtureGoals'; home?: number | null; away?: number | null }
    }>
}

export type GetMatchesForTeamsVariables = Types.Exact<{
    homeTeamId: Types.Scalars['String']['input']
    awayTeamId: Types.Scalars['String']['input']
}>

export type GetMatchesForTeams = {
    __typename?: 'Query'
    allMatchesForTeams: Array<{
        __typename?: 'Match'
        id: string
        date: any
        state: Types.MatchState
        homeTeamGoals: number
        awayTeamGoals: number
        league: { __typename?: 'League'; id: string; name: string }
        homeTeam: { __typename?: 'Team'; id: string; name: string }
        awayTeam: { __typename?: 'Team'; id: string; name: string }
    }>
}

export type GetMatchByApiIdVariables = Types.Exact<{
    apiId: Types.Scalars['Float']['input']
}>

export type GetMatchByApiId = {
    __typename?: 'Query'
    matchByApiId: {
        __typename?: 'Match'
        id: string
        date: any
        state: Types.MatchState
        homeTeamId: string
        awayTeamId: string
        homeTeamGoals: number
        awayTeamGoals: number
        league: { __typename?: 'League'; name: string }
        homeTeam: { __typename?: 'Team'; name: string; synced: boolean }
        awayTeam: { __typename?: 'Team'; name: string; synced: boolean }
    }
}

export type CreateMatchFromApiVariables = Types.Exact<{
    apiId: Types.Scalars['Float']['input']
    unsyncedTeamApiId?: Types.InputMaybe<Types.Scalars['Float']['input']>
}>

export type CreateMatchFromApi = {
    __typename?: 'Mutation'
    createMatchFromAPI: {
        __typename?: 'Match'
        id: string
        date: any
        state: Types.MatchState
        homeTeamGoals: number
        awayTeamGoals: number
        league: { __typename?: 'League'; name: string }
        homeTeam: { __typename?: 'Team'; name: string }
        awayTeam: { __typename?: 'Team'; name: string }
    }
}

export const GetMatchesByDateDocument = /*#__PURE__*/ gql`
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

/**
 * __useGetMatchesByDate__
 *
 * To run a query within a React component, call `useGetMatchesByDate` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchesByDate` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchesByDate({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetMatchesByDate(
    baseOptions: Apollo.QueryHookOptions<GetMatchesByDate, GetMatchesByDateVariables> &
        ({ variables: GetMatchesByDateVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetMatchesByDate, GetMatchesByDateVariables>(
        GetMatchesByDateDocument,
        options,
    )
}
export function useGetMatchesByDateLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetMatchesByDate, GetMatchesByDateVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetMatchesByDate, GetMatchesByDateVariables>(
        GetMatchesByDateDocument,
        options,
    )
}
// @ts-ignore
export function useGetMatchesByDateSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetMatchesByDate, GetMatchesByDateVariables>,
): Apollo.UseSuspenseQueryResult<GetMatchesByDate, GetMatchesByDateVariables>
export function useGetMatchesByDateSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetMatchesByDate, GetMatchesByDateVariables>,
): Apollo.UseSuspenseQueryResult<GetMatchesByDate | undefined, GetMatchesByDateVariables>
export function useGetMatchesByDateSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetMatchesByDate, GetMatchesByDateVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetMatchesByDate, GetMatchesByDateVariables>(
        GetMatchesByDateDocument,
        options,
    )
}
export type GetMatchesByDateHookResult = ReturnType<typeof useGetMatchesByDate>
export type GetMatchesByDateLazyQueryHookResult = ReturnType<typeof useGetMatchesByDateLazyQuery>
export type GetMatchesByDateSuspenseQueryHookResult = ReturnType<
    typeof useGetMatchesByDateSuspenseQuery
>
export type GetMatchesByDateQueryResult = Apollo.QueryResult<
    GetMatchesByDate,
    GetMatchesByDateVariables
>
export const GetMatchesForTeamsDocument = /*#__PURE__*/ gql`
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

/**
 * __useGetMatchesForTeams__
 *
 * To run a query within a React component, call `useGetMatchesForTeams` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchesForTeams` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchesForTeams({
 *   variables: {
 *      homeTeamId: // value for 'homeTeamId'
 *      awayTeamId: // value for 'awayTeamId'
 *   },
 * });
 */
export function useGetMatchesForTeams(
    baseOptions: Apollo.QueryHookOptions<GetMatchesForTeams, GetMatchesForTeamsVariables> &
        ({ variables: GetMatchesForTeamsVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetMatchesForTeams, GetMatchesForTeamsVariables>(
        GetMatchesForTeamsDocument,
        options,
    )
}
export function useGetMatchesForTeamsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetMatchesForTeams, GetMatchesForTeamsVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetMatchesForTeams, GetMatchesForTeamsVariables>(
        GetMatchesForTeamsDocument,
        options,
    )
}
// @ts-ignore
export function useGetMatchesForTeamsSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetMatchesForTeams, GetMatchesForTeamsVariables>,
): Apollo.UseSuspenseQueryResult<GetMatchesForTeams, GetMatchesForTeamsVariables>
export function useGetMatchesForTeamsSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetMatchesForTeams, GetMatchesForTeamsVariables>,
): Apollo.UseSuspenseQueryResult<GetMatchesForTeams | undefined, GetMatchesForTeamsVariables>
export function useGetMatchesForTeamsSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetMatchesForTeams, GetMatchesForTeamsVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetMatchesForTeams, GetMatchesForTeamsVariables>(
        GetMatchesForTeamsDocument,
        options,
    )
}
export type GetMatchesForTeamsHookResult = ReturnType<typeof useGetMatchesForTeams>
export type GetMatchesForTeamsLazyQueryHookResult = ReturnType<
    typeof useGetMatchesForTeamsLazyQuery
>
export type GetMatchesForTeamsSuspenseQueryHookResult = ReturnType<
    typeof useGetMatchesForTeamsSuspenseQuery
>
export type GetMatchesForTeamsQueryResult = Apollo.QueryResult<
    GetMatchesForTeams,
    GetMatchesForTeamsVariables
>
export const GetMatchByApiIdDocument = /*#__PURE__*/ gql`
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
                synced
            }
            awayTeam {
                name
                synced
            }
        }
    }
`

/**
 * __useGetMatchByApiId__
 *
 * To run a query within a React component, call `useGetMatchByApiId` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchByApiId` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchByApiId({
 *   variables: {
 *      apiId: // value for 'apiId'
 *   },
 * });
 */
export function useGetMatchByApiId(
    baseOptions: Apollo.QueryHookOptions<GetMatchByApiId, GetMatchByApiIdVariables> &
        ({ variables: GetMatchByApiIdVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetMatchByApiId, GetMatchByApiIdVariables>(
        GetMatchByApiIdDocument,
        options,
    )
}
export function useGetMatchByApiIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetMatchByApiId, GetMatchByApiIdVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetMatchByApiId, GetMatchByApiIdVariables>(
        GetMatchByApiIdDocument,
        options,
    )
}
// @ts-ignore
export function useGetMatchByApiIdSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetMatchByApiId, GetMatchByApiIdVariables>,
): Apollo.UseSuspenseQueryResult<GetMatchByApiId, GetMatchByApiIdVariables>
export function useGetMatchByApiIdSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetMatchByApiId, GetMatchByApiIdVariables>,
): Apollo.UseSuspenseQueryResult<GetMatchByApiId | undefined, GetMatchByApiIdVariables>
export function useGetMatchByApiIdSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<GetMatchByApiId, GetMatchByApiIdVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetMatchByApiId, GetMatchByApiIdVariables>(
        GetMatchByApiIdDocument,
        options,
    )
}
export type GetMatchByApiIdHookResult = ReturnType<typeof useGetMatchByApiId>
export type GetMatchByApiIdLazyQueryHookResult = ReturnType<typeof useGetMatchByApiIdLazyQuery>
export type GetMatchByApiIdSuspenseQueryHookResult = ReturnType<
    typeof useGetMatchByApiIdSuspenseQuery
>
export type GetMatchByApiIdQueryResult = Apollo.QueryResult<
    GetMatchByApiId,
    GetMatchByApiIdVariables
>
export const CreateMatchFromApiDocument = /*#__PURE__*/ gql`
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
export type CreateMatchFromApiMutationFn = Apollo.MutationFunction<
    CreateMatchFromApi,
    CreateMatchFromApiVariables
>

/**
 * __useCreateMatchFromApi__
 *
 * To run a mutation, you first call `useCreateMatchFromApi` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatchFromApi` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMatchFromApi, { data, loading, error }] = useCreateMatchFromApi({
 *   variables: {
 *      apiId: // value for 'apiId'
 *      unsyncedTeamApiId: // value for 'unsyncedTeamApiId'
 *   },
 * });
 */
export function useCreateMatchFromApi(
    baseOptions?: Apollo.MutationHookOptions<CreateMatchFromApi, CreateMatchFromApiVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<CreateMatchFromApi, CreateMatchFromApiVariables>(
        CreateMatchFromApiDocument,
        options,
    )
}
export type CreateMatchFromApiHookResult = ReturnType<typeof useCreateMatchFromApi>
export type CreateMatchFromApiMutationResult = Apollo.MutationResult<CreateMatchFromApi>
export type CreateMatchFromApiMutationOptions = Apollo.BaseMutationOptions<
    CreateMatchFromApi,
    CreateMatchFromApiVariables
>
