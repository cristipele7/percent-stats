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

export type ApiFootballFixtureType = {
    __typename?: 'ApiFootballFixtureType'
    fixture: FixtureInfo
    goals: FixtureGoals
    league: FixtureLeague
    teams: FixtureTeams
}

export type BoolFilter = {
    equals?: InputMaybe<Scalars['Boolean']['input']>
    not?: InputMaybe<BoolFilter>
}

export type Country = {
    __typename?: 'Country'
    _count: CountryCount
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id: Scalars['ID']['output']
    leagues?: Maybe<Array<League>>
    name: Scalars['String']['output']
    teams?: Maybe<Array<Team>>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CountryCount = {
    __typename?: 'CountryCount'
    leagues: Scalars['Int']['output']
    teams: Scalars['Int']['output']
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
    teams?: InputMaybe<TeamCreateNestedManyWithoutCountryInput>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CountryCreateNestedOneWithoutLeaguesInput = {
    connect?: InputMaybe<CountryWhereUniqueInput>
    connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutLeaguesInput>
    create?: InputMaybe<CountryCreateWithoutLeaguesInput>
}

export type CountryCreateNestedOneWithoutTeamsInput = {
    connect?: InputMaybe<CountryWhereUniqueInput>
    connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutTeamsInput>
    create?: InputMaybe<CountryCreateWithoutTeamsInput>
}

export type CountryCreateOrConnectWithoutLeaguesInput = {
    create: CountryCreateWithoutLeaguesInput
    where: CountryWhereUniqueInput
}

export type CountryCreateOrConnectWithoutTeamsInput = {
    create: CountryCreateWithoutTeamsInput
    where: CountryWhereUniqueInput
}

export type CountryCreateWithoutLeaguesInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    teams?: InputMaybe<TeamCreateNestedManyWithoutCountryInput>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CountryCreateWithoutTeamsInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    leagues?: InputMaybe<LeagueCreateNestedManyWithoutCountryInput>
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
    teams?: InputMaybe<TeamListRelationFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type CountryWhereUniqueInput = {
    AND?: InputMaybe<Array<CountryWhereInput>>
    NOT?: InputMaybe<Array<CountryWhereInput>>
    OR?: InputMaybe<Array<CountryWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<Scalars['String']['input']>
    leagues?: InputMaybe<LeagueListRelationFilter>
    name?: InputMaybe<Scalars['String']['input']>
    teams?: InputMaybe<TeamListRelationFilter>
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

export type EnumMatchStateFilter = {
    equals?: InputMaybe<MatchState>
    in?: InputMaybe<Array<MatchState>>
    not?: InputMaybe<EnumMatchStateFilter>
    notIn?: InputMaybe<Array<MatchState>>
}

export type EnumUserTypeFilter = {
    equals?: InputMaybe<UserType>
    in?: InputMaybe<Array<UserType>>
    not?: InputMaybe<EnumUserTypeFilter>
    notIn?: InputMaybe<Array<UserType>>
}

export type FixtureGoals = {
    __typename?: 'FixtureGoals'
    away?: Maybe<Scalars['Int']['output']>
    home?: Maybe<Scalars['Int']['output']>
}

export type FixtureInfo = {
    __typename?: 'FixtureInfo'
    date: Scalars['String']['output']
    id: Scalars['Int']['output']
    status: FixtureStatus
}

export type FixtureLeague = {
    __typename?: 'FixtureLeague'
    country: Scalars['String']['output']
    id: Scalars['Int']['output']
    name: Scalars['String']['output']
    round: Scalars['String']['output']
}

export type FixtureStatus = {
    __typename?: 'FixtureStatus'
    short: Scalars['String']['output']
}

export type FixtureTeam = {
    __typename?: 'FixtureTeam'
    id: Scalars['Int']['output']
    name: Scalars['String']['output']
}

export type FixtureTeams = {
    __typename?: 'FixtureTeams'
    away: FixtureTeam
    home: FixtureTeam
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

export type IntFilter = {
    equals?: InputMaybe<Scalars['Int']['input']>
    gt?: InputMaybe<Scalars['Int']['input']>
    gte?: InputMaybe<Scalars['Int']['input']>
    in?: InputMaybe<Array<Scalars['Int']['input']>>
    lt?: InputMaybe<Scalars['Int']['input']>
    lte?: InputMaybe<Scalars['Int']['input']>
    not?: InputMaybe<IntFilter>
    notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type League = {
    __typename?: 'League'
    _count: LeagueCount
    /** @Validator.@IsNumber() */
    apiId: Scalars['Float']['output']
    country: Country
    countryId: Scalars['String']['output']
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id: Scalars['ID']['output']
    matches?: Maybe<Array<Match>>
    name: Scalars['String']['output']
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type LeagueAvgAggregate = {
    __typename?: 'LeagueAvgAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
}

export type LeagueCount = {
    __typename?: 'LeagueCount'
    matches: Scalars['Int']['output']
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
    matches?: InputMaybe<MatchCreateNestedManyWithoutLeagueInput>
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

export type LeagueCreateNestedOneWithoutMatchesInput = {
    connect?: InputMaybe<LeagueWhereUniqueInput>
    connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutMatchesInput>
    create?: InputMaybe<LeagueCreateWithoutMatchesInput>
}

export type LeagueCreateOrConnectWithoutCountryInput = {
    create: LeagueCreateWithoutCountryInput
    where: LeagueWhereUniqueInput
}

export type LeagueCreateOrConnectWithoutMatchesInput = {
    create: LeagueCreateWithoutMatchesInput
    where: LeagueWhereUniqueInput
}

export type LeagueCreateWithoutCountryInput = {
    apiId: Scalars['Float']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    matches?: InputMaybe<MatchCreateNestedManyWithoutLeagueInput>
    name: Scalars['String']['input']
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type LeagueCreateWithoutMatchesInput = {
    apiId: Scalars['Float']['input']
    country: CountryCreateNestedOneWithoutLeaguesInput
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

export type LeagueScalarRelationFilter = {
    is?: InputMaybe<LeagueWhereInput>
    isNot?: InputMaybe<LeagueWhereInput>
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
    matches?: InputMaybe<MatchListRelationFilter>
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
    matches?: InputMaybe<MatchListRelationFilter>
    name?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type Match = {
    __typename?: 'Match'
    /** @Validator.@IsNumber() */
    apiId: Scalars['Float']['output']
    awayTeam: Team
    /** @Validator.@IsInt() */
    awayTeamGoals: Scalars['Int']['output']
    awayTeamId: Scalars['String']['output']
    createdAt?: Maybe<Scalars['DateTime']['output']>
    date: Scalars['DateTime']['output']
    homeTeam: Team
    /** @Validator.@IsInt() */
    homeTeamGoals: Scalars['Int']['output']
    homeTeamId: Scalars['String']['output']
    id: Scalars['ID']['output']
    league: League
    leagueId: Scalars['String']['output']
    /** @Validator.@IsInt() */
    round: Scalars['Int']['output']
    state: MatchState
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type MatchAvgAggregate = {
    __typename?: 'MatchAvgAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    awayTeamGoals?: Maybe<Scalars['Float']['output']>
    homeTeamGoals?: Maybe<Scalars['Float']['output']>
    round?: Maybe<Scalars['Float']['output']>
}

export type MatchCountAggregate = {
    __typename?: 'MatchCountAggregate'
    _all: Scalars['Int']['output']
    apiId: Scalars['Int']['output']
    awayTeamGoals: Scalars['Int']['output']
    awayTeamId: Scalars['Int']['output']
    createdAt: Scalars['Int']['output']
    date: Scalars['Int']['output']
    homeTeamGoals: Scalars['Int']['output']
    homeTeamId: Scalars['Int']['output']
    id: Scalars['Int']['output']
    leagueId: Scalars['Int']['output']
    round: Scalars['Int']['output']
    state: Scalars['Int']['output']
    updatedAt: Scalars['Int']['output']
}

export type MatchCreateManyAwayTeamInput = {
    apiId: Scalars['Float']['input']
    awayTeamGoals: Scalars['Int']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    date: Scalars['DateTime']['input']
    homeTeamGoals: Scalars['Int']['input']
    homeTeamId: Scalars['String']['input']
    id?: InputMaybe<Scalars['String']['input']>
    leagueId: Scalars['String']['input']
    round: Scalars['Int']['input']
    state: MatchState
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type MatchCreateManyAwayTeamInputEnvelope = {
    data: Array<MatchCreateManyAwayTeamInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MatchCreateManyHomeTeamInput = {
    apiId: Scalars['Float']['input']
    awayTeamGoals: Scalars['Int']['input']
    awayTeamId: Scalars['String']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    date: Scalars['DateTime']['input']
    homeTeamGoals: Scalars['Int']['input']
    id?: InputMaybe<Scalars['String']['input']>
    leagueId: Scalars['String']['input']
    round: Scalars['Int']['input']
    state: MatchState
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type MatchCreateManyHomeTeamInputEnvelope = {
    data: Array<MatchCreateManyHomeTeamInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MatchCreateManyLeagueInput = {
    apiId: Scalars['Float']['input']
    awayTeamGoals: Scalars['Int']['input']
    awayTeamId: Scalars['String']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    date: Scalars['DateTime']['input']
    homeTeamGoals: Scalars['Int']['input']
    homeTeamId: Scalars['String']['input']
    id?: InputMaybe<Scalars['String']['input']>
    round: Scalars['Int']['input']
    state: MatchState
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type MatchCreateManyLeagueInputEnvelope = {
    data: Array<MatchCreateManyLeagueInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MatchCreateNestedManyWithoutAwayTeamInput = {
    connect?: InputMaybe<Array<MatchWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<MatchCreateOrConnectWithoutAwayTeamInput>>
    create?: InputMaybe<Array<MatchCreateWithoutAwayTeamInput>>
    createMany?: InputMaybe<MatchCreateManyAwayTeamInputEnvelope>
}

export type MatchCreateNestedManyWithoutHomeTeamInput = {
    connect?: InputMaybe<Array<MatchWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<MatchCreateOrConnectWithoutHomeTeamInput>>
    create?: InputMaybe<Array<MatchCreateWithoutHomeTeamInput>>
    createMany?: InputMaybe<MatchCreateManyHomeTeamInputEnvelope>
}

export type MatchCreateNestedManyWithoutLeagueInput = {
    connect?: InputMaybe<Array<MatchWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<MatchCreateOrConnectWithoutLeagueInput>>
    create?: InputMaybe<Array<MatchCreateWithoutLeagueInput>>
    createMany?: InputMaybe<MatchCreateManyLeagueInputEnvelope>
}

export type MatchCreateOrConnectWithoutAwayTeamInput = {
    create: MatchCreateWithoutAwayTeamInput
    where: MatchWhereUniqueInput
}

export type MatchCreateOrConnectWithoutHomeTeamInput = {
    create: MatchCreateWithoutHomeTeamInput
    where: MatchWhereUniqueInput
}

export type MatchCreateOrConnectWithoutLeagueInput = {
    create: MatchCreateWithoutLeagueInput
    where: MatchWhereUniqueInput
}

export type MatchCreateWithoutAwayTeamInput = {
    apiId: Scalars['Float']['input']
    awayTeamGoals: Scalars['Int']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    date: Scalars['DateTime']['input']
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    homeTeamGoals: Scalars['Int']['input']
    id?: InputMaybe<Scalars['String']['input']>
    league: LeagueCreateNestedOneWithoutMatchesInput
    round: Scalars['Int']['input']
    state: MatchState
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type MatchCreateWithoutHomeTeamInput = {
    apiId: Scalars['Float']['input']
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
    awayTeamGoals: Scalars['Int']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    date: Scalars['DateTime']['input']
    homeTeamGoals: Scalars['Int']['input']
    id?: InputMaybe<Scalars['String']['input']>
    league: LeagueCreateNestedOneWithoutMatchesInput
    round: Scalars['Int']['input']
    state: MatchState
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type MatchCreateWithoutLeagueInput = {
    apiId: Scalars['Float']['input']
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
    awayTeamGoals: Scalars['Int']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    date: Scalars['DateTime']['input']
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    homeTeamGoals: Scalars['Int']['input']
    id?: InputMaybe<Scalars['String']['input']>
    round: Scalars['Int']['input']
    state: MatchState
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type MatchListRelationFilter = {
    every?: InputMaybe<MatchWhereInput>
    none?: InputMaybe<MatchWhereInput>
    some?: InputMaybe<MatchWhereInput>
}

export type MatchMaxAggregate = {
    __typename?: 'MatchMaxAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    awayTeamGoals?: Maybe<Scalars['Int']['output']>
    awayTeamId?: Maybe<Scalars['String']['output']>
    createdAt?: Maybe<Scalars['DateTime']['output']>
    date?: Maybe<Scalars['DateTime']['output']>
    homeTeamGoals?: Maybe<Scalars['Int']['output']>
    homeTeamId?: Maybe<Scalars['String']['output']>
    id?: Maybe<Scalars['String']['output']>
    leagueId?: Maybe<Scalars['String']['output']>
    round?: Maybe<Scalars['Int']['output']>
    state?: Maybe<MatchState>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type MatchMinAggregate = {
    __typename?: 'MatchMinAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    awayTeamGoals?: Maybe<Scalars['Int']['output']>
    awayTeamId?: Maybe<Scalars['String']['output']>
    createdAt?: Maybe<Scalars['DateTime']['output']>
    date?: Maybe<Scalars['DateTime']['output']>
    homeTeamGoals?: Maybe<Scalars['Int']['output']>
    homeTeamId?: Maybe<Scalars['String']['output']>
    id?: Maybe<Scalars['String']['output']>
    leagueId?: Maybe<Scalars['String']['output']>
    round?: Maybe<Scalars['Int']['output']>
    state?: Maybe<MatchState>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export enum MatchState {
    FirstHalf = 'FIRST_HALF',
    FullTime = 'FULL_TIME',
    HalfTime = 'HALF_TIME',
    NotStarted = 'NOT_STARTED',
    SecondHalf = 'SECOND_HALF',
}

export type MatchSumAggregate = {
    __typename?: 'MatchSumAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    awayTeamGoals?: Maybe<Scalars['Int']['output']>
    homeTeamGoals?: Maybe<Scalars['Int']['output']>
    round?: Maybe<Scalars['Int']['output']>
}

export type MatchWhereInput = {
    AND?: InputMaybe<Array<MatchWhereInput>>
    NOT?: InputMaybe<Array<MatchWhereInput>>
    OR?: InputMaybe<Array<MatchWhereInput>>
    apiId?: InputMaybe<FloatFilter>
    awayTeam?: InputMaybe<TeamScalarRelationFilter>
    awayTeamGoals?: InputMaybe<IntFilter>
    awayTeamId?: InputMaybe<StringFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    date?: InputMaybe<DateTimeFilter>
    homeTeam?: InputMaybe<TeamScalarRelationFilter>
    homeTeamGoals?: InputMaybe<IntFilter>
    homeTeamId?: InputMaybe<StringFilter>
    id?: InputMaybe<StringFilter>
    league?: InputMaybe<LeagueScalarRelationFilter>
    leagueId?: InputMaybe<StringFilter>
    round?: InputMaybe<IntFilter>
    state?: InputMaybe<EnumMatchStateFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type MatchWhereUniqueInput = {
    AND?: InputMaybe<Array<MatchWhereInput>>
    NOT?: InputMaybe<Array<MatchWhereInput>>
    OR?: InputMaybe<Array<MatchWhereInput>>
    apiId?: InputMaybe<Scalars['Float']['input']>
    awayTeam?: InputMaybe<TeamScalarRelationFilter>
    awayTeamGoals?: InputMaybe<IntFilter>
    awayTeamId?: InputMaybe<StringFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    date?: InputMaybe<DateTimeFilter>
    homeTeam?: InputMaybe<TeamScalarRelationFilter>
    homeTeamGoals?: InputMaybe<IntFilter>
    homeTeamId?: InputMaybe<StringFilter>
    id?: InputMaybe<Scalars['String']['input']>
    league?: InputMaybe<LeagueScalarRelationFilter>
    leagueId?: InputMaybe<StringFilter>
    round?: InputMaybe<IntFilter>
    state?: InputMaybe<EnumMatchStateFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type Mutation = {
    __typename?: 'Mutation'
    createCountry: Country
    createLeague: League
    createMatchFromAPI: Match
    createTeam: Team
    createUser: User
    deleteCountry: Country
    deleteLeague: League
    deleteTeam: Team
    deleteUser: User
    updateUser: User
}

export type MutationCreateCountryArgs = {
    data: CountryCreateInput
}

export type MutationCreateLeagueArgs = {
    data: LeagueCreateInput
}

export type MutationCreateMatchFromApiArgs = {
    apiId: Scalars['Float']['input']
    unsyncedTeamApiId?: InputMaybe<Scalars['Float']['input']>
}

export type MutationCreateTeamArgs = {
    data: TeamCreateInput
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

export type MutationDeleteTeamArgs = {
    where: TeamWhereUniqueInput
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
    allMatchesForTeams: Array<Match>
    countries: Array<Country>
    leaguesByCountry: Array<League>
    matchByApiId: Match
    matchesByDateFromAPI: Array<ApiFootballFixtureType>
    teamsByCountry: Array<Team>
    user: User
    users: Array<User>
}

export type QueryAllMatchesForTeamsArgs = {
    awayTeamId: Scalars['String']['input']
    homeTeamId: Scalars['String']['input']
}

export type QueryLeaguesByCountryArgs = {
    countryId: Scalars['String']['input']
}

export type QueryMatchByApiIdArgs = {
    apiId: Scalars['Float']['input']
}

export type QueryMatchesByDateFromApiArgs = {
    date: Scalars['String']['input']
}

export type QueryTeamsByCountryArgs = {
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

export type Team = {
    __typename?: 'Team'
    _count: TeamCount
    /** @Validator.@IsNumber() */
    apiId: Scalars['Float']['output']
    awayMatches?: Maybe<Array<Match>>
    country: Country
    countryId: Scalars['String']['output']
    createdAt?: Maybe<Scalars['DateTime']['output']>
    homeMatches?: Maybe<Array<Match>>
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    synced: Scalars['Boolean']['output']
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type TeamAvgAggregate = {
    __typename?: 'TeamAvgAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
}

export type TeamCount = {
    __typename?: 'TeamCount'
    awayMatches: Scalars['Int']['output']
    homeMatches: Scalars['Int']['output']
}

export type TeamCountAggregate = {
    __typename?: 'TeamCountAggregate'
    _all: Scalars['Int']['output']
    apiId: Scalars['Int']['output']
    countryId: Scalars['Int']['output']
    createdAt: Scalars['Int']['output']
    id: Scalars['Int']['output']
    name: Scalars['Int']['output']
    synced: Scalars['Int']['output']
    updatedAt: Scalars['Int']['output']
}

export type TeamCreateInput = {
    apiId: Scalars['Float']['input']
    awayMatches?: InputMaybe<MatchCreateNestedManyWithoutAwayTeamInput>
    country: CountryCreateNestedOneWithoutTeamsInput
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    homeMatches?: InputMaybe<MatchCreateNestedManyWithoutHomeTeamInput>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    synced?: InputMaybe<Scalars['Boolean']['input']>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TeamCreateManyCountryInput = {
    apiId: Scalars['Float']['input']
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    synced?: InputMaybe<Scalars['Boolean']['input']>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TeamCreateManyCountryInputEnvelope = {
    data: Array<TeamCreateManyCountryInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type TeamCreateNestedManyWithoutCountryInput = {
    connect?: InputMaybe<Array<TeamWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<TeamCreateOrConnectWithoutCountryInput>>
    create?: InputMaybe<Array<TeamCreateWithoutCountryInput>>
    createMany?: InputMaybe<TeamCreateManyCountryInputEnvelope>
}

export type TeamCreateNestedOneWithoutAwayMatchesInput = {
    connect?: InputMaybe<TeamWhereUniqueInput>
    connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutAwayMatchesInput>
    create?: InputMaybe<TeamCreateWithoutAwayMatchesInput>
}

export type TeamCreateNestedOneWithoutHomeMatchesInput = {
    connect?: InputMaybe<TeamWhereUniqueInput>
    connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutHomeMatchesInput>
    create?: InputMaybe<TeamCreateWithoutHomeMatchesInput>
}

export type TeamCreateOrConnectWithoutAwayMatchesInput = {
    create: TeamCreateWithoutAwayMatchesInput
    where: TeamWhereUniqueInput
}

export type TeamCreateOrConnectWithoutCountryInput = {
    create: TeamCreateWithoutCountryInput
    where: TeamWhereUniqueInput
}

export type TeamCreateOrConnectWithoutHomeMatchesInput = {
    create: TeamCreateWithoutHomeMatchesInput
    where: TeamWhereUniqueInput
}

export type TeamCreateWithoutAwayMatchesInput = {
    apiId: Scalars['Float']['input']
    country: CountryCreateNestedOneWithoutTeamsInput
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    homeMatches?: InputMaybe<MatchCreateNestedManyWithoutHomeTeamInput>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    synced?: InputMaybe<Scalars['Boolean']['input']>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TeamCreateWithoutCountryInput = {
    apiId: Scalars['Float']['input']
    awayMatches?: InputMaybe<MatchCreateNestedManyWithoutAwayTeamInput>
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    homeMatches?: InputMaybe<MatchCreateNestedManyWithoutHomeTeamInput>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    synced?: InputMaybe<Scalars['Boolean']['input']>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TeamCreateWithoutHomeMatchesInput = {
    apiId: Scalars['Float']['input']
    awayMatches?: InputMaybe<MatchCreateNestedManyWithoutAwayTeamInput>
    country: CountryCreateNestedOneWithoutTeamsInput
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    synced?: InputMaybe<Scalars['Boolean']['input']>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TeamListRelationFilter = {
    every?: InputMaybe<TeamWhereInput>
    none?: InputMaybe<TeamWhereInput>
    some?: InputMaybe<TeamWhereInput>
}

export type TeamMaxAggregate = {
    __typename?: 'TeamMaxAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    countryId?: Maybe<Scalars['String']['output']>
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    synced?: Maybe<Scalars['Boolean']['output']>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type TeamMinAggregate = {
    __typename?: 'TeamMinAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
    countryId?: Maybe<Scalars['String']['output']>
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    synced?: Maybe<Scalars['Boolean']['output']>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type TeamScalarRelationFilter = {
    is?: InputMaybe<TeamWhereInput>
    isNot?: InputMaybe<TeamWhereInput>
}

export type TeamSumAggregate = {
    __typename?: 'TeamSumAggregate'
    apiId?: Maybe<Scalars['Float']['output']>
}

export type TeamWhereInput = {
    AND?: InputMaybe<Array<TeamWhereInput>>
    NOT?: InputMaybe<Array<TeamWhereInput>>
    OR?: InputMaybe<Array<TeamWhereInput>>
    apiId?: InputMaybe<FloatFilter>
    awayMatches?: InputMaybe<MatchListRelationFilter>
    country?: InputMaybe<CountryScalarRelationFilter>
    countryId?: InputMaybe<StringFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    homeMatches?: InputMaybe<MatchListRelationFilter>
    id?: InputMaybe<StringFilter>
    name?: InputMaybe<StringFilter>
    synced?: InputMaybe<BoolFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type TeamWhereUniqueInput = {
    AND?: InputMaybe<Array<TeamWhereInput>>
    NOT?: InputMaybe<Array<TeamWhereInput>>
    OR?: InputMaybe<Array<TeamWhereInput>>
    apiId?: InputMaybe<Scalars['Float']['input']>
    awayMatches?: InputMaybe<MatchListRelationFilter>
    country?: InputMaybe<CountryScalarRelationFilter>
    countryId?: InputMaybe<StringFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    homeMatches?: InputMaybe<MatchListRelationFilter>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<StringFilter>
    synced?: InputMaybe<BoolFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
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
