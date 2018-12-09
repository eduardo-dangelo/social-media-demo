import React from 'react';
import { BoxContent, CommentActions, CommentBox, CommentContent } from '../../../elements/layout'
import { FaThumbsUp, FaTrashAlt, FaUser } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'
import Tada from 'react-reveal/Tada'
import { ActionLink } from '../../../elements/form'
import DeleteCommentForm from '../../../forms/DeleteCommentForm'

class Comment extends React.Component {
  state = {
    counter: 0,
    deleteComment: false
  }

  render() {
    const { comment, userId, updateRequired } = this.props;
    const { deleteComment } = this.state;

    return (
      <CommentBox key={comment.id}>
        {!deleteComment && (
          <CommentContent>
            <FaUser/>
            {' '}
            <strong>{comment.author.name}</strong>
            <Flip cascade top>
              {comment.content}
            </Flip>
          </CommentContent>
        )}
        {deleteComment && (
          <CommentContent>
            <DeleteCommentForm
              userId={userId}
              commentId={comment.id}
              onCancel={this.toggleDeleteComment}
              updateRequired={updateRequired}
            />
          </CommentContent>
        )}
        <CommentActions>
          <Tada  spy={this.state.counter}>
            <ActionLink onClick={this.handleLike}>
              <span>
                like 12
                <FaThumbsUp/>
              </span>
            </ActionLink>
          </Tada>
          {comment.author.id === userId && (
            <ActionLink onClick={this.toggleDeleteComment}>
              <span>
                <FaTrashAlt/>
              </span>
            </ActionLink>
          )}
        </CommentActions>
      </CommentBox>
    )
  }

  handleLike = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  toggleDeleteComment = () => {
    this.setState({ deleteComment: !this.state.deleteComment });
  }
}

export default Comment