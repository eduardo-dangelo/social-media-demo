import gql from 'graphql-tag'

export const authenticateUser = gql`
  mutation AuthenticateUser ($email: String!, $password: String!) { 
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`;