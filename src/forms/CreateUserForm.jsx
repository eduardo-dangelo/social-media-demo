import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import {
  ActionBar,
  ActionButton,
  ErrorBox,
  FaCogSpin,
  Field,
  Form,
  FormGroup,
  Label,
} from '../elements/form'
import { signupUser } from '../services/mutations'
import { FaSignInAlt } from 'react-icons/fa'

class CreateUserForm extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    loading: false,
    error: false
  }

  render () {
    const { loading, error, email, password, name } = this.state;

    const validate = () => {
      let disabled = false
      const values = [
        email,
        password,
        name,
      ]

      values.forEach((item) => {
        if (item === '') {
          disabled = true
        }
      })

      // if (loading) {
      //   disabled = true
      // }

      return disabled;
    }

    return (
      <Form onSubmit={this.handleSignupUser}>
        {error && (
          <ErrorBox>
            An error has occurred
          </ErrorBox>
        )}
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
        <ActionBar divider>
          <ActionButton type="submit" disabled={validate()}>
            <span>
              Sign Up {loading ? <FaCogSpin/> : <FaSignInAlt/>}
            </span>
          </ActionButton>
        </ActionBar>
      </Form>
    )
  }

  handleSignupUser = async (e) => {
    const { email, password, name } = this.state;
    e.preventDefault();
    this.setState({ loading: true, error: false });

    try {
      const user = await this.props.signupUser({variables: {email, password, name}})
      localStorage.setItem('graphcoolToken', user.data.signupUser.token)
      this.setState({ loading: false })
      this.props.history.replace('/social-media-demo')
    } catch (e) {
      console.error(`An error occured: `, e)
      this.setState({ loading: false, error: true })
      this.props.history.replace('/')
    }
  }
}

export default compose(
  graphql(signupUser, {name: 'signupUser'}),
)(withRouter(CreateUserForm))