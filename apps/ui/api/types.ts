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

export type EnumProductTypeFilter = {
    equals?: InputMaybe<ProductType>
    in?: InputMaybe<Array<ProductType>>
    not?: InputMaybe<EnumProductTypeFilter>
    notIn?: InputMaybe<Array<ProductType>>
}

export type EnumUserTypeFilter = {
    equals?: InputMaybe<UserType>
    in?: InputMaybe<Array<UserType>>
    not?: InputMaybe<EnumUserTypeFilter>
    notIn?: InputMaybe<Array<UserType>>
}

export type Mutation = {
    __typename?: 'Mutation'
    createProduct: Product
    createUser: User
    removeProduct: Product
    removeUser: User
    updateProduct: Product
    updateUser: User
}

export type MutationCreateProductArgs = {
    data: ProductCreateInput
}

export type MutationCreateUserArgs = {
    data: UserCreateInput
}

export type MutationRemoveProductArgs = {
    where: ProductWhereUniqueInput
}

export type MutationRemoveUserArgs = {
    where: UserWhereUniqueInput
}

export type MutationUpdateProductArgs = {
    data: ProductUpdateInput
    where: ProductWhereUniqueInput
}

export type MutationUpdateUserArgs = {
    data: UserUpdateInput
    where: UserWhereUniqueInput
}

export type Product = {
    __typename?: 'Product'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id: Scalars['ID']['output']
    name?: Maybe<Scalars['String']['output']>
    type: ProductType
    updatedAt?: Maybe<Scalars['DateTime']['output']>
    user: User
    userId: Scalars['String']['output']
}

export type ProductCountAggregate = {
    __typename?: 'ProductCountAggregate'
    _all: Scalars['Int']['output']
    createdAt: Scalars['Int']['output']
    id: Scalars['Int']['output']
    name: Scalars['Int']['output']
    type: Scalars['Int']['output']
    updatedAt: Scalars['Int']['output']
    userId: Scalars['Int']['output']
}

export type ProductCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type: ProductType
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
    user: UserCreateNestedOneWithoutProductsInput
}

export type ProductCreateManyUserInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type: ProductType
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProductCreateManyUserInputEnvelope = {
    data: Array<ProductCreateManyUserInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ProductCreateNestedManyWithoutUserInput = {
    connect?: InputMaybe<Array<ProductWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutUserInput>>
    create?: InputMaybe<Array<ProductCreateWithoutUserInput>>
    createMany?: InputMaybe<ProductCreateManyUserInputEnvelope>
}

export type ProductCreateOrConnectWithoutUserInput = {
    create: ProductCreateWithoutUserInput
    where: ProductWhereUniqueInput
}

export type ProductCreateWithoutUserInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type: ProductType
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProductListRelationFilter = {
    every?: InputMaybe<ProductWhereInput>
    none?: InputMaybe<ProductWhereInput>
    some?: InputMaybe<ProductWhereInput>
}

export type ProductMaxAggregate = {
    __typename?: 'ProductMaxAggregate'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    type?: Maybe<ProductType>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
    userId?: Maybe<Scalars['String']['output']>
}

export type ProductMinAggregate = {
    __typename?: 'ProductMinAggregate'
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    type?: Maybe<ProductType>
    updatedAt?: Maybe<Scalars['DateTime']['output']>
    userId?: Maybe<Scalars['String']['output']>
}

export type ProductScalarWhereInput = {
    AND?: InputMaybe<Array<ProductScalarWhereInput>>
    NOT?: InputMaybe<Array<ProductScalarWhereInput>>
    OR?: InputMaybe<Array<ProductScalarWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    name?: InputMaybe<StringFilter>
    type?: InputMaybe<EnumProductTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
}

export enum ProductType {
    Clothes = 'CLOTHES',
    Electronics = 'ELECTRONICS',
    Shoes = 'SHOES',
}

export type ProductUpdateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type?: InputMaybe<ProductType>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
    user?: InputMaybe<UserUpdateOneRequiredWithoutProductsNestedInput>
}

export type ProductUpdateManyMutationInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type?: InputMaybe<ProductType>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProductUpdateManyWithWhereWithoutUserInput = {
    data: ProductUpdateManyMutationInput
    where: ProductScalarWhereInput
}

export type ProductUpdateManyWithoutUserNestedInput = {
    connect?: InputMaybe<Array<ProductWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutUserInput>>
    create?: InputMaybe<Array<ProductCreateWithoutUserInput>>
    createMany?: InputMaybe<ProductCreateManyUserInputEnvelope>
    delete?: InputMaybe<Array<ProductWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>
    disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>
    set?: InputMaybe<Array<ProductWhereUniqueInput>>
    update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutUserInput>>
    updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutUserInput>>
    upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutUserInput>>
}

export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    data: ProductUpdateWithoutUserInput
    where: ProductWhereUniqueInput
}

export type ProductUpdateWithoutUserInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type?: InputMaybe<ProductType>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    create: ProductCreateWithoutUserInput
    update: ProductUpdateWithoutUserInput
    where: ProductWhereUniqueInput
}

export type ProductWhereInput = {
    AND?: InputMaybe<Array<ProductWhereInput>>
    NOT?: InputMaybe<Array<ProductWhereInput>>
    OR?: InputMaybe<Array<ProductWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    name?: InputMaybe<StringFilter>
    type?: InputMaybe<EnumProductTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    user?: InputMaybe<UserScalarRelationFilter>
    userId?: InputMaybe<StringFilter>
}

export type ProductWhereUniqueInput = {
    AND?: InputMaybe<Array<ProductWhereInput>>
    NOT?: InputMaybe<Array<ProductWhereInput>>
    OR?: InputMaybe<Array<ProductWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<StringFilter>
    type?: InputMaybe<EnumProductTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    user?: InputMaybe<UserScalarRelationFilter>
    userId?: InputMaybe<StringFilter>
}

export type Query = {
    __typename?: 'Query'
    product: Product
    user: User
    users: Array<User>
}

export type QueryProductArgs = {
    where: ProductWhereUniqueInput
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
    _count: UserCount
    createdAt?: Maybe<Scalars['DateTime']['output']>
    id: Scalars['ID']['output']
    name?: Maybe<Scalars['String']['output']>
    products?: Maybe<Array<Product>>
    type: UserType
    updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UserCount = {
    __typename?: 'UserCount'
    products: Scalars['Int']['output']
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
    products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>
    type: UserType
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type UserCreateNestedOneWithoutProductsInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>
    create?: InputMaybe<UserCreateWithoutProductsInput>
}

export type UserCreateOrConnectWithoutProductsInput = {
    create: UserCreateWithoutProductsInput
    where: UserWhereUniqueInput
}

export type UserCreateWithoutProductsInput = {
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

export type UserScalarRelationFilter = {
    is?: InputMaybe<UserWhereInput>
    isNot?: InputMaybe<UserWhereInput>
}

export enum UserType {
    Admin = 'ADMIN',
    Client = 'CLIENT',
}

export type UserUpdateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    products?: InputMaybe<ProductUpdateManyWithoutUserNestedInput>
    type?: InputMaybe<UserType>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>
    create?: InputMaybe<UserCreateWithoutProductsInput>
    update?: InputMaybe<UserUpdateToOneWithWhereWithoutProductsInput>
    upsert?: InputMaybe<UserUpsertWithoutProductsInput>
}

export type UserUpdateToOneWithWhereWithoutProductsInput = {
    data: UserUpdateWithoutProductsInput
    where?: InputMaybe<UserWhereInput>
}

export type UserUpdateWithoutProductsInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>
    id?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    type?: InputMaybe<UserType>
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type UserUpsertWithoutProductsInput = {
    create: UserCreateWithoutProductsInput
    update: UserUpdateWithoutProductsInput
    where?: InputMaybe<UserWhereInput>
}

export type UserWhereInput = {
    AND?: InputMaybe<Array<UserWhereInput>>
    NOT?: InputMaybe<Array<UserWhereInput>>
    OR?: InputMaybe<Array<UserWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    name?: InputMaybe<StringFilter>
    products?: InputMaybe<ProductListRelationFilter>
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
    products?: InputMaybe<ProductListRelationFilter>
    type?: InputMaybe<EnumUserTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}
