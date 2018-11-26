import gql from 'graphql-tag'

export const loggedInUser = gql`
  query LoggedInUser {
    loggedInUser {
      id
    }
  }
`;