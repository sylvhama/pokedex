const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./prisma/generated/prisma-client");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Pokemon = require("./resolvers/Pokemon");

const resolvers = {
  Query,
  Mutation,
  Pokemon
};

const server = new GraphQLServer({
  typeDefs: "./backend/schema.graphql",
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
