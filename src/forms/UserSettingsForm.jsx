import React from 'react';
import { ActionBar, ActionButton, ErrorBox, FaCogSpin, Field, Form, FormGroup, Label, RadioButton } from '../elements/form'
import { FaMoon, FaLightbulb } from 'react-icons/fa'

class UserSettingsForm extends React.Component {
  state = {
    theme: 'dark',
    name: '',
    loading: false,
    error: false
  }

  render() {
    const { loading, error, theme, name } = this.state;

    const validate = () => {
      let disabled = false
      const values = [
        name,
        theme,
      ]

      values.forEach((item) => {
        if (item === '') {
          disabled = true
        }
      })

      if (loading) {
        disabled = true
      }

      return disabled;
    }

    return (
      <Form onSubmit={this.handleSaveChanges}>
        {error && (
          <ErrorBox>
            An error has occurred
          </ErrorBox>
        )}
        <FormGroup>
          <Label>
            name:
          </Label>
          <Field
            value={name}
            placeholder='name'
            onChange={(e) => this.setState({name: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Theme:
          </Label>
          <RadioButton
            type="button"
            active={theme === 'dark'}
            onClick={this.handleSelectTheme('dark')}
          >
            <FaMoon/>
            Dark
          </RadioButton>
          <RadioButton
            type="button"
            active={theme === 'light'}
            onClick={this.handleSelectTheme('light')}
          >
            <FaLightbulb/>
            Light
          </RadioButton>
        </FormGroup>
        <ActionBar divider>
          <ActionButton type="submit" disabled={validate()}>
            Save {loading && <FaCogSpin/>}
          </ActionButton>
        </ActionBar>
      </Form>
    )
  }

  handleSaveChanges = () => {
    // logic here...
  }

  handleSelectTheme = (theme) => () => {
   this.setState({ theme: theme }) 
  }
}

export default UserSettingsForm