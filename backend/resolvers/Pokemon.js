function types(parent, args, context) {
  return context.prisma.pokemon({ id: parent.id }).types();
}

function evolutions(parent, args, context) {
  return context.prisma.pokemon({ id: parent.id }).evolutions();
}

module.exports = {
  types,
  evolutions
};
