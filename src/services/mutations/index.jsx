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
  mutation UpdateUser ($id: ID!, $name: String, $theme: String) {
    updateUser(id: $id, name: $name, theme: $theme) {
      id
      name
      email
      theme
    }
  }
`;

export const createPost = gql`
  mutation CreatePost ($content: String!, $authorId: ID!) {
    createPost(content: $content, authorId: $authorId) {
      id
    }
  }
`;

export const updatePost = gql`
  mutation UpdatePost ($id: ID!, $content: String!, $authorId: ID!) {
    updatePost(id: $id, content: $content, authorId: $authorId) {
      id
      content
    }
  }
`;


export const deletePost = gql`
  mutation DeletePost ($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;