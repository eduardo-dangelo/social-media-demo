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