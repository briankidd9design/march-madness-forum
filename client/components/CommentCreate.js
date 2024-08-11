import React, { Component } from "react";
// React does not natively understand the syntax of GraphQL, so we need to use a gql helper function
import gql from "graphql-tag";
// this is a helper to integrate graphQL with the React side of our application
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchComments.js";

class CommentCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: " " };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query }],
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <Link to="/">Back To Main Comments</Link>
        <h3>Add Comment</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Comment:</label>
          <input
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const addCommentCreation = gql`
  mutation AddComment($title: String) {
    addComment(title: $title) {
      title
    }
  }
`;

export default graphql(addCommentCreation)(CommentCreate);
