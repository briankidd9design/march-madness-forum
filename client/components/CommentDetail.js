import React, { Component } from "react";
// This is the helper that we use to sandwich a helper method and a React component
import { graphql } from "react-apollo";
// import the query
import fetchComment from "../queries/fetchComment";
import ReplyCreate from "./ReplyCreate";
import { Link } from "react-router";
import ReplyList from "./ReplyList";

class CommentDetail extends Component {
  render() {
    const { comment } = this.props.data;
    if (!comment) {
      {
        return <div>Loading...</div>;
      }
    }
    return (
      <div>
        <Link to="/">Back To Main Comments</Link>
        <h5 id="commentDetail">{comment.title}</h5>
        <ReplyList replies={comment.replies} />
        <ReplyCreate commentId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchComment, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(CommentDetail);
