const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUserIdOrThrowErrorIfNotAuthenticated } = require('../utils');


async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  const valid = await bcrypt.compare(args.password, user.password)
  if (!user || !valid) throw new Error('Please check your credentials');
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  return {
    token,
    user,
  }
}

function postType(parent, args, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.createType({
    name: args.name,
    color: args.color
  });
}

function updateType(parent, args, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.updateType({
    data: {
      name: args.name,
      color: args.color
    },
    where: {
      id: args.id
    }
  });
}

function deleteType(parent, args, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.deleteType({
    id: args.id
  });
}

function postPokemon(parent, args, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.createPokemon({
    ...args,
    types: {
      connect: args.types.map(typeId => ({
        id: typeId
      }))
    },
    evolutions: {
      connect: args.evolutions.map(evolutionId => ({
        id: evolutionId
      }))
    }
  });
}

function updatePokemon(parent, { id, ...data }, context) {
  getUserIdOrThrowErrorIfNotAuthenticated(context);
  return context.prisma.updatePokemon({
    data,
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
