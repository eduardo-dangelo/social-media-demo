import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import {
  ActionBar,
  ActionButton, ButtonContent,
  ErrorBox,
  FaCogSpin,
  Field,
  Form,
  FormGroup,
  Label,
} from '../elements/form';
import { authenticateUser } from '../services/mutations';
import { FaSignInAlt } from 'react-icons/fa';
import Flip from 'react-reveal/Flip'

class LoginUserForm extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: false,
  }

  render () {
    const { loading, error, email, password } = this.state;

    const validate = () => {
      let disabled = false
      const values = [
        email,
        password,
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
      <Form onSubmit={this.authenticateUser}>
        {error && (
          <ErrorBox>
            invalid credentials
          </ErrorBox>
        )}
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
            <ButtonContent>
              <Flip cascade top>
                Log In
                {!loading ? <FaSignInAlt/> : ''}
              </Flip>
              {loading ? <FaCogSpin/> : ''}
            </ButtonContent>
          </ActionButton>
        </ActionBar>
      </Form>
    )
  }

  authenticateUser = async (e) => {
    const { authenticateUser, history, updateRequired } = this.props;
    const {email, password} = this.state;
    e.preventDefault();
    this.setState({ loading: true, error: false });


    authenticateUser({
      variables: { email, password },
    })
      .then((response) => (
        localStorage.setItem('graphcoolToken', response.data.authenticateUser.token),
        history.replace('/social-media-demo'),
        updateRequired()
      ))
      .catch((e) => (
        this.setState({ loading: false, error: true })
      ))
  }
}



export default compose(
  graphql(authenticateUser, {name: 'authenticateUser'}),
)(withRouter(LoginUserForm))
