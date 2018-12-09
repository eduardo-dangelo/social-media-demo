import React from 'react';
import {
  ActionButton, ButtonContent,
  ErrorBox,
  FaCogSpin,
  Field,
  Form,
  FormGroup, Label,
} from '../elements/form';
import { FaPaperPlane } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'
import { compose, graphql } from 'react-apollo'
import { updatePost } from '../services/mutations'

class EditPostForm extends React.Component {
  state = {
    theme: 'dark',
    content: '',
    loading: false,
    error: false
  }

  componentDidMount() {
    const { postContent } = this.props;
    this.setState({ content: postContent });
  }


  render() {
    const { loading, error, content } = this.state;

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
      <Form onSubmit={this.handleSaveChanges}>
        {error && (
          <ErrorBox>
            An error has occurred
          </ErrorBox>
        )}
        <FormGroup noMargin>
          <Label>
            Edit Post:
          </Label>
          <Field
            value={content}
            placeholder='post...'
            onChange={(e) => this.setState({content: e.target.value})}
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
    )
  }

  handleSaveChanges = async (e) => {
    const { content } = this.state;
    const { userId, postId } = this.props;
    e.preventDefault();
    this.setState({ loading: true, error: false });

    await this.props.updatePost({
      variables: { id: postId, content, authorId: userId }
    })
      .then(() => (
        this.setState({ loading: false, error: false }),
        this.props.updateRequired()
      ))
  }
}

export default compose(
  graphql(updatePost, { name: 'updatePost'})
)(EditPostForm);