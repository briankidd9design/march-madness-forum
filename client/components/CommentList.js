// For this example, we use a class-based component, since helper methods will be used. However, the updated version 2.0 will be all functional components as used in the initial version of this project I created
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchComments.js";
// We are making this class-based component because we will have helper methods.
class CommentList extends Component {
  renderComments() {
    return this.props.data.comments.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <Link className="comment-link" to={`/comments/${id}`}>
          {title}
        </Link>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="forum-container">
        <h1>March Madness Discussion Forum</h1>
        <p>
          * Please keep the discussion civil. Click the text of each comment to
          leave a reply
        </p>
        <ul className="collection">{this.renderComments()}</ul>
        <Link
          to="/comments/new"
          className="btn-floating btn-large #0d47a1 #1565c0 blue darken-3 right"
        >
          {/* add is a reference to the add icon */}
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(query)(CommentList);
