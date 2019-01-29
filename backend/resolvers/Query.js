async function pokemons(parent, args, context) {
  const count = await context.prisma
    .pokemonsConnection({
      where: {
        name_contains: args.filter
      }
    })
    .aggregate()
    .count();
  const list = await context.prisma.pokemons({
    where: {
      name_contains: args.filter
    },
    orderBy: "number_ASC"
  });
  return {
    count,
    list
  };
}

async function pokemon(parent, args, context) {
  const pokemon = await context.prisma.pokemon({
    number: args.number
  });
  return pokemon;
}

async function types(parent, args, context) {
  const types = await context.prisma.types({
    orderBy: "name_ASC"
  });
  return types;
}

module.exports = {
  pokemons,
  pokemon,
  types
};
