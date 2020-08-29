const { GraphQLServer, PubSub } = require("graphql-yoga");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
  context: { pubsub },
});

server.start(({ port }) => {
  console.log(`GraphQL server is starting at http://localhost:${port}/.`);
});
