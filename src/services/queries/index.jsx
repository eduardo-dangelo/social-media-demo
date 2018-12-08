import gql from 'graphql-tag'

export const loggedInUser = gql`
  query LoggedInUser {
    loggedInUser {
      id
    }
  }
`;

export const currentUser = gql`
  query CurrentUser ($id: ID!){
    User(id: $id) {
      id
      email
      name
    }
  }
`;

export const allPosts = gql`
  query AllPosts {
    allPosts(orderBy: createdAt_DESC) {
      id
      createdAt
      updatedAt
      content
      author {
        id
        name
      }
    }
  }
`;