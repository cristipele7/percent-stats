export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never
}
export type Incremental<T> =
    | T
    | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
    /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
    DateTime: { input: any; output: any }
}

export type DateTimeFilter = {
    equals?: InputMaybe<Scalars['DateTime']['input']>
    gt?: InputMaybe<Scalars['DateTime']['input']>
    gte?: InputMaybe<Scalars['DateTime']['input']>
    in?: InputMaybe<Array<Scalars['DateTime']['input']>>
    lt?: InputMaybe<Scalars['DateTime']['input']>
    lte?: InputMaybe<Scalars['DateTime']['input']>
    not?: InputMaybe<DateTimeFilter>
    notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>
}

export type EnumUserTypeFilter = {
    equals?: InputMaybe<UserType>
    in?: InputMaybe<Array<UserType>>
    not?: InputMaybe<EnumUserTypeFilter>
    notIn?: InputMaybe<Array<UserType>>
}

export type Mutation = {
    __typename?: 'Mutation'
    createUser: User
    removeUser: User
    updateUser: User
}

export type MutationCreateUserArgs = {
    data: UserCreateInput
}

export type MutationRemoveUserArgs = {
    where: UserWhereUniqueInput
}

export type MutationUpdateUserArgs = {
    data: UserUpdateInput
    where: UserWhereUniqueInput
}

export type Query = {
    __typename?: 'Query'
    user: User
    users: Array<User>
}

export type QueryUserArgs = {
    where: UserWhereUniqueInput
}

export enum QueryMode {
    Default = 'default',
    Insensitive = 'insensitive',
}

export type StringFilter = {
    contains?: InputMaybe<Scalars['String']['input']>
    endsWith?: InputMaybe<Scalars['String']['input']>
    equals?: InputMaybe<Scalars['String']['input']>
    gt?: InputMaybe<Scalars['String']['input']>
    gte?: InputMaybe<Scalars['String']['input']>
    in?: InputMaybe<Array<Scalars['String']['input']>>
    lt?: InputMaybe<Scalars['String']['input']>
    lte?: InputMaybe<Scalars['String']['input']>
    mode?: InputMaybe<QueryMode>
    not?: InputMaybe<StringFilter>
    notIn?: InputMaybe<Array<Scalars['String']['input']>>
    startsWith?: InputMaybe<Scalars['String']['input']>
}

export type User = {
    __typename?: 'User'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id: Scalars['ID']['output']
    name?: Maybe<Scalars['String']['output']>
    type: UserType
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UserCountAggregate = {
    __typename?: 'UserCountAggregate'
    _all: Scalars['Int']['output']
    createdAt: Scalars['Int']['output']
    id: Scalars['Int']['output']
    name: Scalars['Int']['output']
    type: Scalars['Int']['output']
    updatedAt: Scalars['Int']['output']
}

export type UserCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type: UserType
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type UserMaxAggregate = {
    __typename?: 'UserMaxAggregate'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    type?: Maybe<UserType>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UserMinAggregate = {
    __typename?: 'UserMinAggregate'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    type?: Maybe<UserType>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export enum UserType {
    Admin = 'ADMIN',
    Client = 'CLIENT',
}

export type UserUpdateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type?: InputMaybe<UserType>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type UserWhereInput = {
    AND?: InputMaybe<Array<UserWhereInput>>
    NOT?: InputMaybe<Array<UserWhereInput>>
    OR?: InputMaybe<Array<UserWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    name?: InputMaybe<StringFilter>
    type?: InputMaybe<EnumUserTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
    AND?: InputMaybe<Array<UserWhereInput>>
    NOT?: InputMaybe<Array<UserWhereInput>>
    OR?: InputMaybe<Array<UserWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<StringFilter>
    type?: InputMaybe<EnumUserTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}
