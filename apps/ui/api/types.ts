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

export type Country = {
    __typename?: 'Country'
    _count: CountryCount
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id: Scalars['ID']['output']
    leagues?: Maybe<Array<League>>
    name: Scalars['String']['output']
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CountryCount = {
    __typename?: 'CountryCount'
    leagues: Scalars['Int']['output']
}

export type CountryCountAggregate = {
    __typename?: 'CountryCountAggregate'
    _all: Scalars['Int']['output']
    createdAt: Scalars['Int']['output']
    id: Scalars['Int']['output']
    name: Scalars['Int']['output']
    updatedAt: Scalars['Int']['output']
}

export type CountryCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    leagues?: InputMaybe<LeagueCreateNestedManyWithoutCountryInput>
    name: Scalars['String']['input']
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CountryCreateNestedOneWithoutLeaguesInput = {
    connect?: InputMaybe<CountryWhereUniqueInput>
    connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutLeaguesInput>
    create?: InputMaybe<CountryCreateWithoutLeaguesInput>
}

export type CountryCreateOrConnectWithoutLeaguesInput = {
    create: CountryCreateWithoutLeaguesInput
    where: CountryWhereUniqueInput
}

export type CountryCreateWithoutLeaguesInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CountryMaxAggregate = {
    __typename?: 'CountryMaxAggregate'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CountryMinAggregate = {
    __typename?: 'CountryMinAggregate'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CountryScalarRelationFilter = {
    is?: InputMaybe<CountryWhereInput>
    isNot?: InputMaybe<CountryWhereInput>
}

export type CountryWhereInput = {
    AND?: InputMaybe<Array<CountryWhereInput>>
    NOT?: InputMaybe<Array<CountryWhereInput>>
    OR?: InputMaybe<Array<CountryWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    leagues?: InputMaybe<LeagueListRelationFilter>
    name?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type CountryWhereUniqueInput = {
    AND?: InputMaybe<Array<CountryWhereInput>>
    NOT?: InputMaybe<Array<CountryWhereInput>>
    OR?: InputMaybe<Array<CountryWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<Scalars['String']['input']>
    leagues?: InputMaybe<LeagueListRelationFilter>
    name?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
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

export type FloatFilter = {
    equals?: InputMaybe<Scalars['Float']['input']>
    gt?: InputMaybe<Scalars['Float']['input']>
    gte?: InputMaybe<Scalars['Float']['input']>
    in?: InputMaybe<Array<Scalars['Float']['input']>>
    lt?: InputMaybe<Scalars['Float']['input']>
    lte?: InputMaybe<Scalars['Float']['input']>
    not?: InputMaybe<FloatFilter>
    notIn?: InputMaybe<Array<Scalars['Float']['input']>>
}

export type League = {
    __typename?: 'League'
    /** @Validator.@IsInt() */
    apiId: Scalars['Float']['output']
    country: Country
    countryId: Scalars['String']['output']
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type LeagueAvgAggregate = {
    __typename?: 'LeagueAvgAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
}

export type LeagueCountAggregate = {
    __typename?: 'LeagueCountAggregate'
    _all: Scalars['Int']['output']
    apiId: Scalars['Int']['output']
    countryId: Scalars['Int']['output']
    createdAt: Scalars['Int']['output']
    id: Scalars['Int']['output']
    name: Scalars['Int']['output']
    updatedAt: Scalars['Int']['output']
}

export type LeagueCreateInput = {
    apiId: Scalars['Float']['input']
    country: CountryCreateNestedOneWithoutLeaguesInput
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type LeagueCreateManyCountryInput = {
    apiId: Scalars['Float']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type LeagueCreateManyCountryInputEnvelope = {
    data: Array<LeagueCreateManyCountryInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type LeagueCreateNestedManyWithoutCountryInput = {
    connect?: InputMaybe<Array<LeagueWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<LeagueCreateOrConnectWithoutCountryInput>>
    create?: InputMaybe<Array<LeagueCreateWithoutCountryInput>>
    createMany?: InputMaybe<LeagueCreateManyCountryInputEnvelope>
}

export type LeagueCreateOrConnectWithoutCountryInput = {
    create: LeagueCreateWithoutCountryInput
    where: LeagueWhereUniqueInput
}

export type LeagueCreateWithoutCountryInput = {
    apiId: Scalars['Float']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type LeagueListRelationFilter = {
    every?: InputMaybe<LeagueWhereInput>
    none?: InputMaybe<LeagueWhereInput>
    some?: InputMaybe<LeagueWhereInput>
}

export type LeagueMaxAggregate = {
    __typename?: 'LeagueMaxAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    countryId?: Maybe<Scalars['String']['output']>
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type LeagueMinAggregate = {
    __typename?: 'LeagueMinAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    countryId?: Maybe<Scalars['String']['output']>
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type LeagueSumAggregate = {
    __typename?: 'LeagueSumAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
}

export type LeagueWhereInput = {
    AND?: InputMaybe<Array<LeagueWhereInput>>
    NOT?: InputMaybe<Array<LeagueWhereInput>>
    OR?: InputMaybe<Array<LeagueWhereInput>>
    apiId?: InputMaybe<FloatFilter>
    country?: InputMaybe<CountryScalarRelationFilter>
    countryId?: InputMaybe<StringFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    name?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type LeagueWhereUniqueInput = {
    AND?: InputMaybe<Array<LeagueWhereInput>>
    NOT?: InputMaybe<Array<LeagueWhereInput>>
    OR?: InputMaybe<Array<LeagueWhereInput>>
    apiId?: InputMaybe<Scalars['Float']['input']>
    country?: InputMaybe<CountryScalarRelationFilter>
    countryId?: InputMaybe<StringFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type Mutation = {
    __typename?: 'Mutation'
    createCountry: Country
    createLeague: League
    createUser: User
    deleteCountry: Country
    deleteLeague: League
    deleteUser: User
    updateUser: User
}

export type MutationCreateCountryArgs = {
    data: CountryCreateInput
}

export type MutationCreateLeagueArgs = {
    data: LeagueCreateInput
}

export type MutationCreateUserArgs = {
    data: UserCreateInput
}

export type MutationDeleteCountryArgs = {
    where: CountryWhereUniqueInput
}

export type MutationDeleteLeagueArgs = {
    where: LeagueWhereUniqueInput
}

export type MutationDeleteUserArgs = {
    where: UserWhereUniqueInput
}

export type MutationUpdateUserArgs = {
    data: UserUpdateInput
    where: UserWhereUniqueInput
}

export type Query = {
    __typename?: 'Query'
    countries: Array<Country>
    leaguesByCountry: Array<League>
    user: User
    users: Array<User>
}

export type QueryLeaguesByCountryArgs = {
    countryId: Scalars['String']['input']
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
    name: Scalars['String']['output']
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
    name: Scalars['String']['input']
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
