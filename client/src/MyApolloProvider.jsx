import React from "react";

import { WebSocketLink } from "@apollo/client/link/ws";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link: wsLink,
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const MyApolloProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MyApolloProvider;
