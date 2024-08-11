import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class ReplyList extends Component {
  onLike(id, likes) {
    // console.log(id);
    this.props.mutate({
      // Optimistic response for likes
      variables: { id: id },
      // 1. Define the optimistic response as a property when you call the mutation
      // 2. Define a typename of mutation
      // 3. Duplicate the code as we see it as a response from the back end
      optimisticResponse: {
        __typename: "Mutation",
        likeReply: {
          id: id,
          __typename: "ReplyType",
          // this is the optimistic part of the response
          // We are guessing tha the request is going to go through successfully and we are hoping that when the response comes back that there is going to be an incremment for the value of the number of likes
          likes: likes + 1,
        },
      },
    });
  }
  renderReplies() {
    return this.props.replies.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => this.onLike(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  }
  render() {
    console.log(this.props);
    return <ul className="collection">{this.renderReplies()}</ul>;
  }
}

const likeMutation = gql`
  mutation LikeReply($id: ID) {
    likeReply(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(likeMutation)(ReplyList);
