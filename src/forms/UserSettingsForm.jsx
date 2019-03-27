import React from 'react';
import {
  ActionBar,
  ActionButton,
  ButtonContent,
  ErrorBox,
  FaCogSpin,
  Field,
  Form,
  FormGroup,
  Label,
  RadioButton,
  SuccessMessage
} from '../elements/form';
import { FaMoon, FaLightbulb, FaPaperclip } from 'react-icons/fa';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { compose, graphql } from 'react-apollo';
import { updateUser } from '../services/mutations';

class UserSettingsForm extends React.Component {
  state = {
    id: '',
    name: '',
    loading: false,
    error: false,
    saveSuccess: false
  }

  componentWillMount() {
    const { currentUser } = this.props;
    this.setState({
      id: currentUser.User.id,
      name: currentUser.User.name,
      authorId: currentUser.User.id
    })
  }


  render() {
    const { theme, userId } = this.props;
    const { loading, error, name, saveSuccess } = this.state;

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
          <Fade bottom opposite when={saveSuccess}>
            <SuccessMessage>
              Saved!
            </SuccessMessage>
          </Fade>
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

  handleSaveChanges = async (e) => {
    const { updateUser, theme } = this.props;
    const { name, id } = this.state;
    e.preventDefault();
    this.setState({ loading: true, error: false });


    updateUser({
      variables: { id, name, theme },
    })
      .then(() => (
        this.setState({ loading: false, error: false, saveSuccess: true }),
        setTimeout(() => this.setState({ saveSuccess: false  }), 2000)
      ))
      .catch(() => (
        this.setState({ loading: false, error: true })
      ))
  }

  handleSelectTheme = (theme) => () => {
    const { onSelectTheme } = this.props;
    onSelectTheme(theme)
  }
}

export default compose(
  graphql(updateUser,
    { name: 'updateUser' })
)(UserSettingsForm)