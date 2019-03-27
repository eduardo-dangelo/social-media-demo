import React from 'react';
import {
  Label,
  Form,
  Field,
  ErrorBox,
  FormGroup,
  FaCogSpin,
  ActionButton,
  ButtonContent,
} from '../elements/form';
import Flip from 'react-reveal/Flip';
import { FaPaperPlane } from 'react-icons/fa';
import { compose, graphql } from 'react-apollo';
import { createPost } from '../services/mutations';

class CreatePostForm extends React.Component {
  state = {
    content: '',
    error: false,
    theme: 'dark',
    loading: false
  }

  render() {
    const { userId, onAuthRequired } = this.props;
    const { loading, error, content, name } = this.state;

    const validate = () => {
      let disabled = false
      const values = [
        content,
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
      <Form onSubmit={userId ? this.handleSaveChanges : onAuthRequired()}>
        {error && (
          <ErrorBox>
            An error has occurred
          </ErrorBox>
        )}
        <FormGroup noMargin>
          <Label>
            Post:
          </Label>
          <Field
            value={content}
            placeholder='post...'
            onChange={this.handleFieldChange}
          />
          <ActionButton type="submit" disabled={validate()}>
            <ButtonContent>
              <Flip cascade top>
                Send
                {!loading ? <FaPaperPlane/> : ''}
              </Flip>
              {loading ? <FaCogSpin/> : ''}
            </ButtonContent>
          </ActionButton>
        </FormGroup>
      </Form>
    );
  }

  handleFieldChange = (e) => {
    const { userId, onAuthRequired } = this.props;
    if (userId) {
      this.setState({content: e.target.value})
    } else {
      onAuthRequired()
    }
  }

  handleSaveChanges = async (e) => {
    const { content } = this.state;
    const authorId = this.props.userId;
    e.preventDefault();
    this.setState({ loading: true, error: false });

    await this.props.createPost({
      variables: { content, authorId }
    })
      .then((response) => (
        this.setState({ content: '', loading: false, error: false }),
        this.props.updateRequired()
      ))
  }
}

export default compose(
  graphql(createPost, { name: 'createPost'})
)(CreatePostForm);
