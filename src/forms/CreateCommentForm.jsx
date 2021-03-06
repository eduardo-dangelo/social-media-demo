import React from 'react';
import {
  Form,
  Label,
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
import { createComment } from '../services/mutations';

class CreateCommentForm extends React.Component {
  state = {
    content: '',
    loading: false,
    error: false
  };

  render() {
    const { loading, error, content } = this.state;

    const validate = () => {
      let disabled = false
      const values = [
        content,
      ];

      values.forEach((item) => {
        if (item === '') {
          disabled = true
        }
      });

      if (loading) {
        disabled = true
      }

      return disabled;
    };

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
            value={content}
            placeholder='comment...'
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
  };

  handleSaveChanges = async (e) => {
    const { content } = this.state;
    const { postId, userId, onUpdateRequired } = this.props;
    e.preventDefault();
    this.setState({ loading: true, error: false });

    await this.props.createComment({
      variables: { postId, authorId: userId, content }
    })
      .then(() => (
        this.setState({ content: '', loading: false, error: false }),
        onUpdateRequired()
      ))
  }
}

export default compose(
  graphql(createComment, { name: 'createComment' })
)(CreateCommentForm);
