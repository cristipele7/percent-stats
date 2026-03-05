import * as Types from '../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUsersVariables = Types.Exact<{ [key: string]: never }>

export type GetUsers = {
    __typename?: 'Query'
    users: Array<{ __typename?: 'User'; id: string; type: Types.UserType; name: string }>
}

export type GetUserVariables = Types.Exact<{
    id: Types.Scalars['String']['input']
}>

export type GetUser = {
    __typename?: 'Query'
    user: { __typename?: 'User'; type: Types.UserType; name: string }
}

export type CreateUserVariables = Types.Exact<{
    data: Types.UserCreateInput
}>

export type CreateUser = {
    __typename?: 'Mutation'
    createUser: { __typename?: 'User'; id: string }
}

export type UpdateUserVariables = Types.Exact<{
    id: Types.Scalars['String']['input']
    data: Types.UserUpdateInput
}>

export type UpdateUser = {
    __typename?: 'Mutation'
    updateUser: { __typename?: 'User'; id: string }
}

export type DeleteUserVariables = Types.Exact<{
    id: Types.Scalars['String']['input']
}>

export type DeleteUser = {
    __typename?: 'Mutation'
    deleteUser: { __typename?: 'User'; id: string }
}

export const GetUsersDocument = /*#__PURE__*/ gql`
    query GetUsers {
        users {
            id
            type
            name
        }
    }
`

/**
 * __useGetUsers__
 *
 * To run a query within a React component, call `useGetUsers` and pass it any options that fit your needs.
 * When your component renders, `useGetUsers` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsers({
 *   variables: {
 *   },
 * });
 */
export function useGetUsers(baseOptions?: Apollo.QueryHookOptions<GetUsers, GetUsersVariables>) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetUsers, GetUsersVariables>(GetUsersDocument, options)
}
export function useGetUsersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetUsers, GetUsersVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetUsers, GetUsersVariables>(GetUsersDocument, options)
}
// @ts-ignore
export function useGetUsersSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsers, GetUsersVariables>,
): Apollo.UseSuspenseQueryResult<GetUsers, GetUsersVariables>
export function useGetUsersSuspenseQuery(
    baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsers, GetUsersVariables>,
): Apollo.UseSuspenseQueryResult<GetUsers | undefined, GetUsersVariables>
export function useGetUsersSuspenseQuery(
    baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsers, GetUsersVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetUsers, GetUsersVariables>(GetUsersDocument, options)
}
export type GetUsersHookResult = ReturnType<typeof useGetUsers>
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>
export type GetUsersQueryResult = Apollo.QueryResult<GetUsers, GetUsersVariables>
export const GetUserDocument = /*#__PURE__*/ gql`
    query GetUser($id: String!) {
        user(where: { id: $id }) {
            type
            name
        }
    }
`

/**
 * __useGetUser__
 *
 * To run a query within a React component, call `useGetUser` and pass it any options that fit your needs.
 * When your component renders, `useGetUser` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUser({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUser(
    baseOptions: Apollo.QueryHookOptions<GetUser, GetUserVariables> &
        ({ variables: GetUserVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetUser, GetUserVariables>(GetUserDocument, options)
}
export function useGetUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetUser, GetUserVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetUser, GetUserVariables>(GetUserDocument, options)
}
// @ts-ignore
export function useGetUserSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GetUser, GetUserVariables>,
): Apollo.UseSuspenseQueryResult<GetUser, GetUserVariables>
export function useGetUserSuspenseQuery(
    baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUser, GetUserVariables>,
): Apollo.UseSuspenseQueryResult<GetUser | undefined, GetUserVariables>
export function useGetUserSuspenseQuery(
    baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUser, GetUserVariables>,
) {
    const options =
        baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GetUser, GetUserVariables>(GetUserDocument, options)
}
export type GetUserHookResult = ReturnType<typeof useGetUser>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>
export type GetUserQueryResult = Apollo.QueryResult<GetUser, GetUserVariables>
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation CreateUser($data: UserCreateInput!) {
        createUser(data: $data) {
            id
        }
    }
`
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUser, CreateUserVariables>

/**
 * __useCreateUser__
 *
 * To run a mutation, you first call `useCreateUser` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUser` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUser, { data, loading, error }] = useCreateUser({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUser(
    baseOptions?: Apollo.MutationHookOptions<CreateUser, CreateUserVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<CreateUser, CreateUserVariables>(CreateUserDocument, options)
}
export type CreateUserHookResult = ReturnType<typeof useCreateUser>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUser>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUser, CreateUserVariables>
export const UpdateUserDocument = /*#__PURE__*/ gql`
    mutation UpdateUser($id: String!, $data: UserUpdateInput!) {
        updateUser(where: { id: $id }, data: $data) {
            id
        }
    }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUser, UpdateUserVariables>

/**
 * __useUpdateUser__
 *
 * To run a mutation, you first call `useUpdateUser` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUser` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUser, { data, loading, error }] = useUpdateUser({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUser(
    baseOptions?: Apollo.MutationHookOptions<UpdateUser, UpdateUserVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<UpdateUser, UpdateUserVariables>(UpdateUserDocument, options)
}
export type UpdateUserHookResult = ReturnType<typeof useUpdateUser>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUser>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUser, UpdateUserVariables>
export const DeleteUserDocument = /*#__PURE__*/ gql`
    mutation DeleteUser($id: String!) {
        deleteUser(where: { id: $id }) {
            id
        }
    }
`
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUser, DeleteUserVariables>

/**
 * __useDeleteUser__
 *
 * To run a mutation, you first call `useDeleteUser` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUser` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUser, { data, loading, error }] = useDeleteUser({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUser(
    baseOptions?: Apollo.MutationHookOptions<DeleteUser, DeleteUserVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<DeleteUser, DeleteUserVariables>(DeleteUserDocument, options)
}
export type DeleteUserHookResult = ReturnType<typeof useDeleteUser>
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUser>
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUser, DeleteUserVariables>
