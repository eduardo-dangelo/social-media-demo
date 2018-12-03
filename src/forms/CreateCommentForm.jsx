import React from 'react';
import {
  ActionButton,
  ErrorBox,
  FaCogSpin,
  Field,
  Form,
  FormGroup, Label,
} from '../elements/form';

class CreateCommentForm extends React.Component {
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
        <FormGroup noMargin>
          <Label>
            Comment:
          </Label>
          <Field
            value={name}
            placeholder='comment...'
            onChange={(e) => this.setState({name: e.target.value})}
          />
          <ActionButton type="submit" disabled={validate()}>
            Save {loading && <FaCogSpin/>}
          </ActionButton>
        </FormGroup>
      </Form>
    )
  }

  handleSaveChanges = () => {
    // logic here...
  }
}

export default CreateCommentForm;