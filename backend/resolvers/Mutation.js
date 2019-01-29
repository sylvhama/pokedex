function postType(parent, args, context) {
  return context.prisma.createType({
    name: args.name,
    color: args.color
  });
}

function updateType(parent, args, context) {
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
  return context.prisma.deleteType({
    id: args.id
  });
}

function postPokemon(parent, args, context) {
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
  return context.prisma.updatePokemon({
    data,
    where: {
      id: id
    }
  });
}

function deletePokemon(parent, args, context) {
  return context.prisma.deletePokemon({
    id: args.id
  });
}

module.exports = {
  postType,
  updateType,
  deleteType,
  postPokemon,
  updatePokemon,
  deletePokemon
};
