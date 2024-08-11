import gql from "graphql-tag";

export default gql`
  {
    comments {
      id
      title
    }
  }
`;
