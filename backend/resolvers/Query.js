async function pokemons(parent, args, context) {
  const count = await context.prisma
    .pokemonsConnection({
      where: {
        name_contains: args.filter
      }
    })
    .aggregate()
    .count();
  const pokemons = await context.prisma.pokemons({
    where: {
      name_contains: args.filter
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  return {
    count,
    pokemons
  };
}

async function pokemon(parent, args, context) {
  if (!args.number) return null;
  const pokemon = await context.prisma.pokemon({
    number: args.number
  });
  return pokemon;
}

async function types(parent, args, context) {
  const types = await context.prisma.types();
  return types;
}

module.exports = {
  pokemons,
  pokemon,
  types
};
