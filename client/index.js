import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";
import App from "./components/App";
import CommentCreate from "./components/CommentCreate";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import CommentList from "./components/CommentList";
import CommentDetail from "./components/CommentDetail";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CommentList} />
          <Route path="comments/new" component={CommentCreate} />
          <Route path="comments/:id" component={CommentDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
