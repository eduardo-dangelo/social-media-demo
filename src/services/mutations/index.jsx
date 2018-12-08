import gql from 'graphql-tag'

export const authenticateUser = gql`
  mutation AuthenticateUser ($email: String!, $password: String!) { 
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`;

export const signupUser = gql`
  mutation SignupUser ($email: String!, $password: String!, $name: String) {
    signupUser(email: $email, password: $password, name: $name) {
      id
      token
    }
  }
`;

export const updateUser = gql`
  mutation UpdateUser ($id: ID!, $name: String, $authorId: ID!) {
    updateUser(id: $id, name: $name, authorId: $authorId) {
      id
      name
      email
    }
  }
`;

export const createPost = gql`
  mutation CreatePost ($content: String!, $authorId: ID!) {
    createPost(content: $content, authorId: $authorId) {
      id
    }
  }
`