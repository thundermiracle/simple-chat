import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const MyApolloProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MyApolloProvider;
