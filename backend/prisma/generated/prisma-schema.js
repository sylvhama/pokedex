module.exports = {
        typeDefs: /* GraphQL */ `type AggregatePokemon {
  count: Int!
}

type AggregateType {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPokemon(data: PokemonCreateInput!): Pokemon!
  updatePokemon(data: PokemonUpdateInput!, where: PokemonWhereUniqueInput!): Pokemon
  updateManyPokemons(data: PokemonUpdateManyMutationInput!, where: PokemonWhereInput): BatchPayload!
  upsertPokemon(where: PokemonWhereUniqueInput!, create: PokemonCreateInput!, update: PokemonUpdateInput!): Pokemon!
  deletePokemon(where: PokemonWhereUniqueInput!): Pokemon
  deleteManyPokemons(where: PokemonWhereInput): BatchPayload!
  createType(data: TypeCreateInput!): Type!
  updateType(data: TypeUpdateInput!, where: TypeWhereUniqueInput!): Type
  updateManyTypes(data: TypeUpdateManyMutationInput!, where: TypeWhereInput): BatchPayload!
  upsertType(where: TypeWhereUniqueInput!, create: TypeCreateInput!, update: TypeUpdateInput!): Type!
  deleteType(where: TypeWhereUniqueInput!): Type
  deleteManyTypes(where: TypeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pokemon {
  id: ID!
  number: Int!
  name: String!
  image: String!
  description: String!
  types(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Type!]
  evolutions(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon!]
}

type PokemonConnection {
  pageInfo: PageInfo!
  edges: [PokemonEdge]!
  aggregate: AggregatePokemon!
}

input PokemonCreateInput {
  number: Int!
  name: String!
  image: String!
  description: String!
  types: TypeCreateManyInput
  evolutions: PokemonCreateManyInput
}

input PokemonCreateManyInput {
  create: [PokemonCreateInput!]
  connect: [PokemonWhereUniqueInput!]
}

type PokemonEdge {
  node: Pokemon!
  cursor: String!
}

enum PokemonOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  name_ASC
  name_DESC
  image_ASC
  image_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PokemonPreviousValues {
  id: ID!
  number: Int!
  name: String!
  image: String!
  description: String!
}

input PokemonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PokemonScalarWhereInput!]
  OR: [PokemonScalarWhereInput!]
  NOT: [PokemonScalarWhereInput!]
}

type PokemonSubscriptionPayload {
  mutation: MutationType!
  node: Pokemon
  updatedFields: [String!]
  previousValues: PokemonPreviousValues
}

input PokemonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PokemonWhereInput
  AND: [PokemonSubscriptionWhereInput!]
  OR: [PokemonSubscriptionWhereInput!]
  NOT: [PokemonSubscriptionWhereInput!]
}

input PokemonUpdateDataInput {
  number: Int
  name: String
  image: String
  description: String
  types: TypeUpdateManyInput
  evolutions: PokemonUpdateManyInput
}

input PokemonUpdateInput {
  number: Int
  name: String
  image: String
  description: String
  types: TypeUpdateManyInput
  evolutions: PokemonUpdateManyInput
}

input PokemonUpdateManyDataInput {
  number: Int
  name: String
  image: String
  description: String
}

input PokemonUpdateManyInput {
  create: [PokemonCreateInput!]
  update: [PokemonUpdateWithWhereUniqueNestedInput!]
  upsert: [PokemonUpsertWithWhereUniqueNestedInput!]
  delete: [PokemonWhereUniqueInput!]
  connect: [PokemonWhereUniqueInput!]
  disconnect: [PokemonWhereUniqueInput!]
  deleteMany: [PokemonScalarWhereInput!]
  updateMany: [PokemonUpdateManyWithWhereNestedInput!]
}

input PokemonUpdateManyMutationInput {
  number: Int
  name: String
  image: String
  description: String
}

input PokemonUpdateManyWithWhereNestedInput {
  where: PokemonScalarWhereInput!
  data: PokemonUpdateManyDataInput!
}

input PokemonUpdateWithWhereUniqueNestedInput {
  where: PokemonWhereUniqueInput!
  data: PokemonUpdateDataInput!
}

input PokemonUpsertWithWhereUniqueNestedInput {
  where: PokemonWhereUniqueInput!
  update: PokemonUpdateDataInput!
  create: PokemonCreateInput!
}

input PokemonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  types_every: TypeWhereInput
  types_some: TypeWhereInput
  types_none: TypeWhereInput
  evolutions_every: PokemonWhereInput
  evolutions_some: PokemonWhereInput
  evolutions_none: PokemonWhereInput
  AND: [PokemonWhereInput!]
  OR: [PokemonWhereInput!]
  NOT: [PokemonWhereInput!]
}

input PokemonWhereUniqueInput {
  id: ID
  number: Int
}

type Query {
  pokemon(where: PokemonWhereUniqueInput!): Pokemon
  pokemons(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon]!
  pokemonsConnection(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonConnection!
  type(where: TypeWhereUniqueInput!): Type
  types(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Type]!
  typesConnection(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TypeConnection!
  node(id: ID!): Node
}

type Subscription {
  pokemon(where: PokemonSubscriptionWhereInput): PokemonSubscriptionPayload
  type(where: TypeSubscriptionWhereInput): TypeSubscriptionPayload
}

type Type {
  id: ID!
  name: String!
  color: String!
}

type TypeConnection {
  pageInfo: PageInfo!
  edges: [TypeEdge]!
  aggregate: AggregateType!
}

input TypeCreateInput {
  name: String!
  color: String!
}

input TypeCreateManyInput {
  create: [TypeCreateInput!]
  connect: [TypeWhereUniqueInput!]
}

type TypeEdge {
  node: Type!
  cursor: String!
}

enum TypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TypePreviousValues {
  id: ID!
  name: String!
  color: String!
}

input TypeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  AND: [TypeScalarWhereInput!]
  OR: [TypeScalarWhereInput!]
  NOT: [TypeScalarWhereInput!]
}

type TypeSubscriptionPayload {
  mutation: MutationType!
  node: Type
  updatedFields: [String!]
  previousValues: TypePreviousValues
}

input TypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TypeWhereInput
  AND: [TypeSubscriptionWhereInput!]
  OR: [TypeSubscriptionWhereInput!]
  NOT: [TypeSubscriptionWhereInput!]
}

input TypeUpdateDataInput {
  name: String
  color: String
}

input TypeUpdateInput {
  name: String
  color: String
}

input TypeUpdateManyDataInput {
  name: String
  color: String
}

input TypeUpdateManyInput {
  create: [TypeCreateInput!]
  update: [TypeUpdateWithWhereUniqueNestedInput!]
  upsert: [TypeUpsertWithWhereUniqueNestedInput!]
  delete: [TypeWhereUniqueInput!]
  connect: [TypeWhereUniqueInput!]
  disconnect: [TypeWhereUniqueInput!]
  deleteMany: [TypeScalarWhereInput!]
  updateMany: [TypeUpdateManyWithWhereNestedInput!]
}

input TypeUpdateManyMutationInput {
  name: String
  color: String
}

input TypeUpdateManyWithWhereNestedInput {
  where: TypeScalarWhereInput!
  data: TypeUpdateManyDataInput!
}

input TypeUpdateWithWhereUniqueNestedInput {
  where: TypeWhereUniqueInput!
  data: TypeUpdateDataInput!
}

input TypeUpsertWithWhereUniqueNestedInput {
  where: TypeWhereUniqueInput!
  update: TypeUpdateDataInput!
  create: TypeCreateInput!
}

input TypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  AND: [TypeWhereInput!]
  OR: [TypeWhereInput!]
  NOT: [TypeWhereInput!]
}

input TypeWhereUniqueInput {
  id: ID
}
`
      }
    