import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetMatchesByDateVariables = Types.Exact<{
    date: Types.Scalars['String']['input']
}>

export type GetMatchesByDate = {
    __typename?: 'Query'
    matchesByDate: Array<{
        __typename?: 'Match'
        id: string
        apiId: number
        date: any
        state: Types.MatchState
        homeTeamGoals: number
        awayTeamGoals: number
        league: { __typename?: 'League'; id: string; apiId: number; name: string }
        homeTeam: { __typename?: 'Team'; id: string; apiId: number; name: string }
        awayTeam: { __typename?: 'Team'; id: string; apiId: number; name: string }
    }>
}

export const GetMatchesByDateDocument = /*#__PURE__*/ gql`
    query GetMatchesByDate($date: String!) {
        matchesByDate(date: $date) {
            id
            apiId
            date
            state
            homeTeamGoals
            awayTeamGoals
            league {
                id
                apiId
                name
            }
            homeTeam {
                id
                apiId
                name
            }
            awayTeam {
                id
                apiId
                name
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
