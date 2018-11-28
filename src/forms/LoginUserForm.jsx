import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { ActionBar, ActionButton, Field, Form, FormGroup, Label } from '../elements/form';
import { authenticateUser } from '../services/mutations';
import { FaCog } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import { variables } from '../services/config'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;
export const FaCogSpin = styled(FaCog)`
  animation: ${rotate} 1s linear infinite;
`;

export const ErrorBox = styled.div`
  padding: ${variables.space};
  border: 1px solid #6f6bcf;
  background: #bfbeff;
  color: #6f6bcf;
  margin-bottom: ${variables.space};
`;

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

      return disabled;
    }

    return (
      <Form onSubmit={this.authenticateUser}>
        {error && (
          <ErrorBox>
            invalid credential
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
        <ActionBar>
          <ActionButton type="submit" disabled={validate()}>
            Log in {loading && <FaCogSpin/>}
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
        updateRequired(),
        this.setState({ loading: false })
      ))
      .catch((e) => (
        this.setState({ loading: false, error: true })
      ))
  }
}



export default compose(
  graphql(authenticateUser, {name: 'authenticateUser'}),
)(withRouter(LoginUserForm))
