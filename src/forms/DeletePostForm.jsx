import React from 'react';
import {
  ActionButton, ButtonContent,
  ErrorBox,
  FaCogSpin,
  Form,
  FormGroup, Label,
} from '../elements/form';
import { FaPaperPlane } from 'react-icons/fa'
import { compose, graphql } from 'react-apollo'
import { deletePost } from '../services/mutations'

class DeletePostForm extends React.Component {
  state = {
    theme: 'dark',
    loading: false,
    error: false
  }

  render() {
    const { loading, error } = this.state;

    return (
      <Form onSubmit={this.handleDeletePost}>
        {error && (
          <ErrorBox>
            An error has occurred
          </ErrorBox>
        )}
        <FormGroup noMargin>
          <Label>
            Are you sure?
          </Label>
          <ActionButton type="submit">
            <ButtonContent>
              Yes
              {!loading ? <FaPaperPlane/> : ''}
              {loading ? <FaCogSpin/> : ''}
            </ButtonContent>
          </ActionButton>
          <ActionButton type="button" onClick={this.handleCancel}>
            <ButtonContent>
              cancel
            </ButtonContent>
          </ActionButton>
        </FormGroup>
      </Form>
    );
  }

  handleDeletePost = async (e) => {
    e.preventDefault();

    const { postId, onUpdateRequired } = this.props;
    this.setState({ loading: true, error: false });

    await this.props.deletePost({
      variables: { id: postId }
    })
      .then(() => (
        this.setState({ loading: false, error: false }),
          onUpdateRequired()
      ))
  }

  handleCancel = () => {
    this.props.onCancel();
  }
}

export default compose(
  graphql(deletePost, { name: 'deletePost'})
)(DeletePostForm);
