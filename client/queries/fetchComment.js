import gql from "graphql-tag";

export default gql`
  query CommentQuery($id: ID!) {
    comment(id: $id) {
      id
      title
      replies {
        id
        content
        likes
      }
    }
  }
`;
