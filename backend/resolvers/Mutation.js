const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserIdOrThrowErrorIfNotAuthenticated } = require("../utils");

async function signup(parent, { input }, context, info) {
  const password = await bcrypt.hash(input.password, 10);
  const user = await context.prisma.createUser({
    input: { email: input.email, password }
  });
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  return {
    token,
    email: user.email
  };
}

async function login(parent, { input }, context, info) {
  const user = await context.prisma.user({ email: input.email });
  const valid = await bcrypt.compare(input.password, user.password);
  if (!user || !valid) throw new Error("Please check your credentials");
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  return {
    token,
    email: user.email
  };
}

function postType(parent, { input }, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.createType({
    name: input.name,
    color: input.color
  });
}

function updateType(parent, { id, input }, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.updateType({
    data: {
      name: input.name,
      color: input.color
    },
    where: {
      id: id
    }
  });
}

function deleteType(parent, args, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.deleteType({
    id: args.id
  });
}

function postPokemon(parent, { input }, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.createPokemon({
    ...input,
    types: {
      connect: input.types.map(typeId => ({
        id: typeId
      }))
    },
    evolutions: {
      connect: input.evolutions.map(evolutionId => ({
        id: evolutionId
      }))
    }
  });
}

function updatePokemon(parent, { id, input }, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.updatePokemon({
    data: input,
    where: {
      id: id
    }
  });
}

function deletePokemon(parent, args, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.deletePokemon({
    id: args.id
  });
}

module.exports = {
  signup,
  login,
  postType,
  updateType,
  deleteType,
  postPokemon,
  updatePokemon,
  deletePokemon
};
