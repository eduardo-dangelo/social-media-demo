import React from 'react';
import { ActionBar, ActionButton, ButtonContent, ErrorBox, FaCogSpin, Field, Form, FormGroup, Label, RadioButton } from '../elements/form'
import { FaMoon, FaLightbulb, FaPaperclip } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'

class UserSettingsForm extends React.Component {
  state = {
    name: '',
    loading: false,
    error: false
  }

  render() {
    const { theme } = this.props;
    const { loading, error, name } = this.state;

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
            activeTheme={theme}
            active={theme === 'dark'}
            onClick={this.handleSelectTheme('dark')}
          >
            <FaMoon/>
            Dark
          </RadioButton>
          <RadioButton
            type="button"
            activeTheme={theme}
            active={theme === 'light'}
            onClick={this.handleSelectTheme('light')}
          >
            <FaLightbulb/>
            Light
          </RadioButton>
        </FormGroup>
        <ActionBar divider>
          <ActionButton type="submit" disabled={validate()}>
            <ButtonContent>
              <Flip cascade top>
                Save
                {!loading ? <FaPaperclip/> : ''}
              </Flip>
              {loading ? <FaCogSpin/> : ''}
            </ButtonContent>
          </ActionButton>
        </ActionBar>
      </Form>
    )
  }

  handleSaveChanges = () => {
    // logic here...
  }

  handleSelectTheme = (theme) => () => {
    const { onSelectTheme } = this.props;
    onSelectTheme(theme)
  }
}

export default UserSettingsForm