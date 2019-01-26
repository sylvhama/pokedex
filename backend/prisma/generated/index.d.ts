// Code generated by Prisma (prisma@1.25.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  pokemon: (where?: PokemonWhereInput) => Promise<boolean>;
  type: (where?: TypeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  pokemon: (where: PokemonWhereUniqueInput) => PokemonPromise;
  pokemons: (args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Pokemon>;
  pokemonsConnection: (args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PokemonConnectionPromise;
  type: (where: TypeWhereUniqueInput) => TypePromise;
  types: (args?: {
    where?: TypeWhereInput;
    orderBy?: TypeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Type>;
  typesConnection: (args?: {
    where?: TypeWhereInput;
    orderBy?: TypeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TypeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPokemon: (data: PokemonCreateInput) => PokemonPromise;
  updatePokemon: (args: {
    data: PokemonUpdateInput;
    where: PokemonWhereUniqueInput;
  }) => PokemonPromise;
  updateManyPokemons: (args: {
    data: PokemonUpdateManyMutationInput;
    where?: PokemonWhereInput;
  }) => BatchPayloadPromise;
  upsertPokemon: (args: {
    where: PokemonWhereUniqueInput;
    create: PokemonCreateInput;
    update: PokemonUpdateInput;
  }) => PokemonPromise;
  deletePokemon: (where: PokemonWhereUniqueInput) => PokemonPromise;
  deleteManyPokemons: (where?: PokemonWhereInput) => BatchPayloadPromise;
  createType: (data: TypeCreateInput) => TypePromise;
  updateType: (args: {
    data: TypeUpdateInput;
    where: TypeWhereUniqueInput;
  }) => TypePromise;
  updateManyTypes: (args: {
    data: TypeUpdateManyMutationInput;
    where?: TypeWhereInput;
  }) => BatchPayloadPromise;
  upsertType: (args: {
    where: TypeWhereUniqueInput;
    create: TypeCreateInput;
    update: TypeUpdateInput;
  }) => TypePromise;
  deleteType: (where: TypeWhereUniqueInput) => TypePromise;
  deleteManyTypes: (where?: TypeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  pokemon: (
    where?: PokemonSubscriptionWhereInput
  ) => PokemonSubscriptionPayloadSubscription;
  type: (
    where?: TypeSubscriptionWhereInput
  ) => TypeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TypeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "color_ASC"
  | "color_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PokemonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "number_ASC"
  | "number_DESC"
  | "name_ASC"
  | "name_DESC"
  | "image_ASC"
  | "image_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TypeUpdateManyInput {
  create?: TypeCreateInput[] | TypeCreateInput;
  update?:
    | TypeUpdateWithWhereUniqueNestedInput[]
    | TypeUpdateWithWhereUniqueNestedInput;
  upsert?:
    | TypeUpsertWithWhereUniqueNestedInput[]
    | TypeUpsertWithWhereUniqueNestedInput;
  delete?: TypeWhereUniqueInput[] | TypeWhereUniqueInput;
  connect?: TypeWhereUniqueInput[] | TypeWhereUniqueInput;
  disconnect?: TypeWhereUniqueInput[] | TypeWhereUniqueInput;
  deleteMany?: TypeScalarWhereInput[] | TypeScalarWhereInput;
  updateMany?:
    | TypeUpdateManyWithWhereNestedInput[]
    | TypeUpdateManyWithWhereNestedInput;
}

export type PokemonWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  number?: Int;
}>;

export interface TypeUpsertWithWhereUniqueNestedInput {
  where: TypeWhereUniqueInput;
  update: TypeUpdateDataInput;
  create: TypeCreateInput;
}

export interface TypeWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  color?: String;
  color_not?: String;
  color_in?: String[] | String;
  color_not_in?: String[] | String;
  color_lt?: String;
  color_lte?: String;
  color_gt?: String;
  color_gte?: String;
  color_contains?: String;
  color_not_contains?: String;
  color_starts_with?: String;
  color_not_starts_with?: String;
  color_ends_with?: String;
  color_not_ends_with?: String;
  AND?: TypeWhereInput[] | TypeWhereInput;
  OR?: TypeWhereInput[] | TypeWhereInput;
  NOT?: TypeWhereInput[] | TypeWhereInput;
}

export interface PokemonCreateInput {
  number: Int;
  name: String;
  image: String;
  description: String;
  types?: TypeCreateManyInput;
  evolutions?: PokemonCreateManyInput;
}

export interface PokemonUpdateManyInput {
  create?: PokemonCreateInput[] | PokemonCreateInput;
  update?:
    | PokemonUpdateWithWhereUniqueNestedInput[]
    | PokemonUpdateWithWhereUniqueNestedInput;
  upsert?:
    | PokemonUpsertWithWhereUniqueNestedInput[]
    | PokemonUpsertWithWhereUniqueNestedInput;
  delete?: PokemonWhereUniqueInput[] | PokemonWhereUniqueInput;
  connect?: PokemonWhereUniqueInput[] | PokemonWhereUniqueInput;
  disconnect?: PokemonWhereUniqueInput[] | PokemonWhereUniqueInput;
  deleteMany?: PokemonScalarWhereInput[] | PokemonScalarWhereInput;
  updateMany?:
    | PokemonUpdateManyWithWhereNestedInput[]
    | PokemonUpdateManyWithWhereNestedInput;
}

export interface TypeCreateManyInput {
  create?: TypeCreateInput[] | TypeCreateInput;
  connect?: TypeWhereUniqueInput[] | TypeWhereUniqueInput;
}

export interface TypeScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  color?: String;
  color_not?: String;
  color_in?: String[] | String;
  color_not_in?: String[] | String;
  color_lt?: String;
  color_lte?: String;
  color_gt?: String;
  color_gte?: String;
  color_contains?: String;
  color_not_contains?: String;
  color_starts_with?: String;
  color_not_starts_with?: String;
  color_ends_with?: String;
  color_not_ends_with?: String;
  AND?: TypeScalarWhereInput[] | TypeScalarWhereInput;
  OR?: TypeScalarWhereInput[] | TypeScalarWhereInput;
  NOT?: TypeScalarWhereInput[] | TypeScalarWhereInput;
}

export interface TypeCreateInput {
  name: String;
  color: String;
}

export interface PokemonSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PokemonWhereInput;
  AND?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
  OR?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
  NOT?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
}

export interface PokemonCreateManyInput {
  create?: PokemonCreateInput[] | PokemonCreateInput;
  connect?: PokemonWhereUniqueInput[] | PokemonWhereUniqueInput;
}

export interface TypeUpdateInput {
  name?: String;
  color?: String;
}

export interface PokemonUpdateInput {
  number?: Int;
  name?: String;
  image?: String;
  description?: String;
  types?: TypeUpdateManyInput;
  evolutions?: PokemonUpdateManyInput;
}

export interface PokemonUpdateManyDataInput {
  number?: Int;
  name?: String;
  image?: String;
  description?: String;
}

export interface PokemonUpdateDataInput {
  number?: Int;
  name?: String;
  image?: String;
  description?: String;
  types?: TypeUpdateManyInput;
  evolutions?: PokemonUpdateManyInput;
}

export interface PokemonUpdateManyWithWhereNestedInput {
  where: PokemonScalarWhereInput;
  data: PokemonUpdateManyDataInput;
}

export interface TypeUpdateWithWhereUniqueNestedInput {
  where: TypeWhereUniqueInput;
  data: TypeUpdateDataInput;
}

export interface PokemonUpsertWithWhereUniqueNestedInput {
  where: PokemonWhereUniqueInput;
  update: PokemonUpdateDataInput;
  create: PokemonCreateInput;
}

export interface TypeUpdateDataInput {
  name?: String;
  color?: String;
}

export interface TypeSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TypeWhereInput;
  AND?: TypeSubscriptionWhereInput[] | TypeSubscriptionWhereInput;
  OR?: TypeSubscriptionWhereInput[] | TypeSubscriptionWhereInput;
  NOT?: TypeSubscriptionWhereInput[] | TypeSubscriptionWhereInput;
}

export interface PokemonUpdateManyMutationInput {
  number?: Int;
  name?: String;
  image?: String;
  description?: String;
}

export interface TypeUpdateManyDataInput {
  name?: String;
  color?: String;
}

export interface TypeUpdateManyWithWhereNestedInput {
  where: TypeScalarWhereInput;
  data: TypeUpdateManyDataInput;
}

export interface PokemonWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  number?: Int;
  number_not?: Int;
  number_in?: Int[] | Int;
  number_not_in?: Int[] | Int;
  number_lt?: Int;
  number_lte?: Int;
  number_gt?: Int;
  number_gte?: Int;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  types_every?: TypeWhereInput;
  types_some?: TypeWhereInput;
  types_none?: TypeWhereInput;
  evolutions_every?: PokemonWhereInput;
  evolutions_some?: PokemonWhereInput;
  evolutions_none?: PokemonWhereInput;
  AND?: PokemonWhereInput[] | PokemonWhereInput;
  OR?: PokemonWhereInput[] | PokemonWhereInput;
  NOT?: PokemonWhereInput[] | PokemonWhereInput;
}

export interface PokemonUpdateWithWhereUniqueNestedInput {
  where: PokemonWhereUniqueInput;
  data: PokemonUpdateDataInput;
}

export type TypeWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TypeUpdateManyMutationInput {
  name?: String;
  color?: String;
}

export interface PokemonScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  number?: Int;
  number_not?: Int;
  number_in?: Int[] | Int;
  number_not_in?: Int[] | Int;
  number_lt?: Int;
  number_lte?: Int;
  number_gt?: Int;
  number_gte?: Int;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: PokemonScalarWhereInput[] | PokemonScalarWhereInput;
  OR?: PokemonScalarWhereInput[] | PokemonScalarWhereInput;
  NOT?: PokemonScalarWhereInput[] | PokemonScalarWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface TypePreviousValues {
  id: ID_Output;
  name: String;
  color: String;
}

export interface TypePreviousValuesPromise
  extends Promise<TypePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  color: () => Promise<String>;
}

export interface TypePreviousValuesSubscription
  extends Promise<AsyncIterator<TypePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  color: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PokemonSubscriptionPayload {
  mutation: MutationType;
  node: Pokemon;
  updatedFields: String[];
  previousValues: PokemonPreviousValues;
}

export interface PokemonSubscriptionPayloadPromise
  extends Promise<PokemonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PokemonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PokemonPreviousValuesPromise>() => T;
}

export interface PokemonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PokemonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PokemonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PokemonPreviousValuesSubscription>() => T;
}

export interface TypeSubscriptionPayload {
  mutation: MutationType;
  node: Type;
  updatedFields: String[];
  previousValues: TypePreviousValues;
}

export interface TypeSubscriptionPayloadPromise
  extends Promise<TypeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TypePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TypePreviousValuesPromise>() => T;
}

export interface TypeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TypeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TypeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TypePreviousValuesSubscription>() => T;
}

export interface Type {
  id: ID_Output;
  name: String;
  color: String;
}

export interface TypePromise extends Promise<Type>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  color: () => Promise<String>;
}

export interface TypeSubscription
  extends Promise<AsyncIterator<Type>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  color: () => Promise<AsyncIterator<String>>;
}

export interface TypeEdge {
  node: Type;
  cursor: String;
}

export interface TypeEdgePromise extends Promise<TypeEdge>, Fragmentable {
  node: <T = TypePromise>() => T;
  cursor: () => Promise<String>;
}

export interface TypeEdgeSubscription
  extends Promise<AsyncIterator<TypeEdge>>,
    Fragmentable {
  node: <T = TypeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PokemonPreviousValues {
  id: ID_Output;
  number: Int;
  name: String;
  image: String;
  description: String;
}

export interface PokemonPreviousValuesPromise
  extends Promise<PokemonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  number: () => Promise<Int>;
  name: () => Promise<String>;
  image: () => Promise<String>;
  description: () => Promise<String>;
}

export interface PokemonPreviousValuesSubscription
  extends Promise<AsyncIterator<PokemonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  number: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface PokemonConnection {
  pageInfo: PageInfo;
  edges: PokemonEdge[];
}

export interface PokemonConnectionPromise
  extends Promise<PokemonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PokemonEdge>>() => T;
  aggregate: <T = AggregatePokemonPromise>() => T;
}

export interface PokemonConnectionSubscription
  extends Promise<AsyncIterator<PokemonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PokemonEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePokemonSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface Pokemon {
  id: ID_Output;
  number: Int;
  name: String;
  image: String;
  description: String;
}

export interface PokemonPromise extends Promise<Pokemon>, Fragmentable {
  id: () => Promise<ID_Output>;
  number: () => Promise<Int>;
  name: () => Promise<String>;
  image: () => Promise<String>;
  description: () => Promise<String>;
  types: <T = FragmentableArray<Type>>(args?: {
    where?: TypeWhereInput;
    orderBy?: TypeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  evolutions: <T = FragmentableArray<Pokemon>>(args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PokemonSubscription
  extends Promise<AsyncIterator<Pokemon>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  number: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  types: <T = Promise<AsyncIterator<TypeSubscription>>>(args?: {
    where?: TypeWhereInput;
    orderBy?: TypeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  evolutions: <T = Promise<AsyncIterator<PokemonSubscription>>>(args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TypeConnection {
  pageInfo: PageInfo;
  edges: TypeEdge[];
}

export interface TypeConnectionPromise
  extends Promise<TypeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TypeEdge>>() => T;
  aggregate: <T = AggregateTypePromise>() => T;
}

export interface TypeConnectionSubscription
  extends Promise<AsyncIterator<TypeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TypeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTypeSubscription>() => T;
}

export interface AggregateType {
  count: Int;
}

export interface AggregateTypePromise
  extends Promise<AggregateType>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTypeSubscription
  extends Promise<AsyncIterator<AggregateType>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PokemonEdge {
  node: Pokemon;
  cursor: String;
}

export interface PokemonEdgePromise extends Promise<PokemonEdge>, Fragmentable {
  node: <T = PokemonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PokemonEdgeSubscription
  extends Promise<AsyncIterator<PokemonEdge>>,
    Fragmentable {
  node: <T = PokemonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePokemon {
  count: Int;
}

export interface AggregatePokemonPromise
  extends Promise<AggregatePokemon>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePokemonSubscription
  extends Promise<AsyncIterator<AggregatePokemon>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Pokemon",
    embedded: false
  },
  {
    name: "Type",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;