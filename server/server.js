const { GraphQLServer } = require("graphql-yoga");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const server = new GraphQLServer({
  typeDefs: 'schema.graphql',
  resolvers: {
    Query,
    Mutation,
  }
});

server.start(({ port }) => {
  console.log(`GraphQL server is starting at http://localhost:${port}/.`);
});
