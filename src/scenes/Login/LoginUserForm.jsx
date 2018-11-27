import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { ActionBar, ActionButton, Field, Form, FormGroup, Label } from '../../elements/form'

class LoginUserForm extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render () {
    return (
      <Form>
        <FormGroup>
          <Label>
            email:
          </Label>
          <Field
            value={this.state.email}
            placeholder='Email address'
            onChange={(e) => this.setState({email: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            password:
          </Label>
          <Field
            type="password"
            value={this.state.password}
            placeholder='Password'
            onChange={(e) => this.setState({password: e.target.value})}
          />
        </FormGroup>
        <ActionBar>
          <ActionButton onClick={this.authenticateUser}>
            Log in
          </ActionButton>
        </ActionBar>
      </Form>
    )
  }

  authenticateUser = async () => {
    const { authenticateUserMutation, history } = this.props
    const {email, password} = this.state

    authenticateUserMutation({
      variables: { email, password },
    })
      .then((response) => (
        history.replace('/'),
        localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
      ))
  }
}

const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUserMutation ($email: String!, $password: String!) { 
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`
export default compose(
  graphql(AUTHENTICATE_USER_MUTATION, {name: 'authenticateUserMutation'}),
  graphql(LOGGED_IN_USER_QUERY, { 
    name: 'loggedInUserQuery',
    options: { fetchPolicy: 'network-only' }
  })
)(withRouter(LoginUserForm))
