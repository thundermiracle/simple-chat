import React from "react";
import ReactDOM from "react-dom";

import MyApolloProvider from "./MyApolloProvider";
import Chat from "./components/Chat";

import "bootstrap/scss/bootstrap.scss";
import "shards-ui/src/scss/shards.scss";
import "./index.scss";

const App = () => (
  <MyApolloProvider>
    <Chat />
  </MyApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
