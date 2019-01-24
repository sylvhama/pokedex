function postType(parent, args, context) {
  return context.prisma.createType({
    name: args.name,
    color: args.color
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

module.exports = {
  postType,
  postPokemon
};
