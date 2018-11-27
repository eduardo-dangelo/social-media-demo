import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { ActionBar, ActionButton, Field, Form, FormGroup, Label } from '../../elements/form'

class CreateUserForm extends React.Component {

  constructor(props) {
    super()

    this.state = {
      email: '',
      password: '',
      name: '',
    }
  }

  render () {
    return (
      <Form>
        <FormGroup>
          <Label>
            Name:
          </Label>
          <Field
            value={this.state.name}
            placeholder='name'
            onChange={(e) => this.setState({name: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Email:
          </Label>
          <Field
            value={this.state.email}
            placeholder='Email address'
            onChange={(e) => this.setState({email: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Password:
          </Label>
          <Field
            type="password"
            value={this.state.password}
            placeholder='Password'
            onChange={(e) => this.setState({password: e.target.value})}
          />
        </FormGroup>
        <ActionBar>
          <ActionButton onClick={this.signupUser}>
            Sign Up
          </ActionButton>
        </ActionBar>
      </Form>
    )
  }

  signupUser = async () => {
    const { email, password, name } = this.state

    try {
      const user = await this.props.signupUserMutation({variables: {email, password, name}})
      localStorage.setItem('graphcoolToken', user.data.signupUser.token)
      this.props.history.replace('/')
    } catch (e) {
      console.error(`An error occured: `, e)
      this.props.history.replace('/')
    }

  }
}

const SIGNUP_USER_MUTATION = gql`
  mutation SignupUserMutation ($email: String!, $password: String!, $name: String) {
    signupUser(email: $email, password: $password, name: $name) {
      id
      token
    }
  }
`

export default compose(
  graphql(SIGNUP_USER_MUTATION, {name: 'signupUserMutation'}),
)(withRouter(CreateUserForm))