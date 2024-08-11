import React, { Component } from "react";
// the gql tag is what allows us to write graphql queries directly into our JavaScript code
import gql from "graphql-tag";
// this graphql helper is what allows us to take a query and sandwich it together with a component
import { graphql } from "react-apollo";

class ReplyCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: " " };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          commentId: this.props.commentId,
        },
      })
      // after the mutation succesfully completes, the inupt will clear out
      .then(() => this.setState({ content: "" }));
    // Try to use  refetchQueries: [{  }], in refactor
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label> Add a Reply, press enter</label>
        <input
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

const addReplyMutation = gql`
  mutation AddReplyToComment($content: String, $commentId: ID) {
    addReplyToComment(content: $content, commentId: $commentId) {
      id
      replies {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(addReplyMutation)(ReplyCreate);
