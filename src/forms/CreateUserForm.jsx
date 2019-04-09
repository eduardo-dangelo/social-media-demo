import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import {
  ActionBarContainer,
  ActionButton, ActionLink, ButtonContent,
  ErrorBox,
  FaCogSpin,
  Field,
  Form,
  FormGroup,
  Label,
} from '../elements/form';
import { signupUser } from '../services/mutations';
import { FaSignInAlt } from 'react-icons/fa';
import Flip from 'react-reveal/Flip';

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
        <ActionBarContainer divider justifyContent={'space-between'}>
          <ActionLink onClick={this.handleLogin}>
            <span>
              Login
            </span>
          </ActionLink>
          <ActionButton type="submit" disabled={validate()}>
            <ButtonContent>
              <Flip cascade top>
                Sign Up
                {!loading ? <FaSignInAlt/> : ''}
              </Flip>
              {loading ? <FaCogSpin/> : ''}
            </ButtonContent>
          </ActionButton>
        </ActionBarContainer>
      </Form>
    )
  }

  handleLogin = () => {
    const { history } = this.props;
    history.replace('/social-media-demo/login');
  }


  handleSignupUser = async (e) => {
    const { email, password, name } = this.state;
    const { history, updateRequired } = this.props;
    e.preventDefault();
    this.setState({ loading: true, error: false });

    try {
      const user = await this.props.signupUser({variables: {email, password, name}})
      localStorage.setItem('graphcoolToken', user.data.signupUser.token)
      this.setState({ loading: false })
      setTimeout(() => (
        updateRequired()
      ), 800)
      setTimeout(() => (
        history.replace('/social-media-demo/')
      ), 1500)
    } catch (e) {
      console.error(`An error occured: `, e)
      this.setState({ loading: false, error: true })
    }
  }
}

export default compose(
  graphql(signupUser, {name: 'signupUser'}),
)(withRouter(CreateUserForm));
