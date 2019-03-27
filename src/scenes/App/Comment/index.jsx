import React from 'react';
import Flip from 'react-reveal/Flip';
import LikesComment from '../LikesComment';
import { ActionLink } from '../../../elements/form';
import EditCommentForm from '../../../forms/EditCommentForm';
import { FaPencilAlt, FaTrashAlt, FaUser } from 'react-icons/fa';
import DeleteCommentForm from '../../../forms/DeleteCommentForm';
import { CommentActions, CommentBox, CommentContent, CommentText } from '../../../elements/layout';

class Comment extends React.Component {
  state = {
    counter: 0,
    deleteComment: false
  }

  render() {
    const { comment, userId, updateRequired } = this.props;
    const { deleteComment, editComment } = this.state;

    return (
      <CommentBox key={comment.id}>
        {!deleteComment && !editComment && (
          <CommentContent>
            <FaUser/>
            {' '}
            <strong>{comment.author.name}</strong>
            <CommentText>
              <Flip cascade top>
                {comment.content}
              </Flip>
            </CommentText>
          </CommentContent>
        )}
        {editComment && (
          <CommentContent>
            <EditCommentForm
              userId={userId}
              commentId={comment.id}
              commentContent={comment.content}
              updateRequired={this.toggleEditComment}
            />
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
          {comment.author.id === userId && (
            <ActionLink marginLeft onClick={this.toggleEditComment}>
              <span>
                <FaPencilAlt/>
              </span>
            </ActionLink>
          )}
          {comment.author.id === userId && (
            <ActionLink onClick={this.toggleDeleteComment}>
              <span>
                <FaTrashAlt/>
              </span>
            </ActionLink>
          )}
          <LikesComment likes={comment.likes} {...this.props}/>
        </CommentActions>
      </CommentBox>
    );
  }

  handleLike = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  toggleEditComment = () => {
    this.setState({ editComment: !this.state.editComment, deleteComment: false })
  }

  toggleDeleteComment = () => {
    this.setState({ deleteComment: !this.state.deleteComment, editComment: false });
  }
}

export default Comment;
