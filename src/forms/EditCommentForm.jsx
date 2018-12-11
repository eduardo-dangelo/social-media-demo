import React from 'react';
import {
  ActionButton, ButtonContent,
  ErrorBox,
  FaCogSpin,
  Field,
  Form,
  FormGroup,
} from '../elements/form';
import { FaPaperPlane } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'
import { compose, graphql } from 'react-apollo'
import { updateComment } from '../services/mutations'

class EditCommentForm extends React.Component {
  state = {
    content: '',
    loading: false,
    error: false
  }

  componentDidMount() {
    const { commentContent } = this.props;
    this.setState({ content: commentContent });
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
      <Form expand onSubmit={this.handleSaveChanges}>
        {error && (
          <ErrorBox>
            An error has occurred
          </ErrorBox>
        )}
        <FormGroup noMargin>
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
    const { userId, commentId } = this.props;
    e.preventDefault();
    this.setState({ loading: true, error: false });

    await this.props.updateComment({
      variables: { id: commentId, content, authorId: userId }
    })
      .then(() => (
        this.setState({ loading: false, error: false }),
        this.props.updateRequired()
      ))
  }
}

export default compose(
  graphql(updateComment, { name: 'updateComment'})
)(EditCommentForm);