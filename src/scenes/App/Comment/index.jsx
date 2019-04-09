import React from 'react';
import Flip from 'react-reveal/Flip';
import LikesComment from '../LikesComment';
import { ActionLink } from '../../../elements/form';
import EditCommentForm from '../../../forms/EditCommentForm';
import { FaPencilAlt, FaTrashAlt, FaUser } from 'react-icons/fa';
import DeleteCommentForm from '../../../forms/DeleteCommentForm';
import {
  CommentActions,
  CommentBox,
  CommentContent,
  CommentText
} from '../../../elements/layout';

class Comment extends React.Component {
  state = {
    counter: 0,
    showDeleteComment: false
  };

  render() {
    const { comment, userId, onUpdateRequired, onAuthRequired } = this.props;
    const { showDeleteComment, showEditComment } = this.state;
    const showCommentContent = !showDeleteComment && !showEditComment;
    const isUserComment = comment.author.id === userId;

    return (
      <CommentBox key={comment.id}>
        {showCommentContent && (
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
        {showEditComment && (
          <CommentContent>
            <EditCommentForm
              userId={userId}
              commentId={comment.id}
              commentContent={comment.content}
              updateRequired={this.toggleEditComment}
            />
          </CommentContent>
        )}
        {showDeleteComment && (
          <CommentContent>
            <DeleteCommentForm
              userId={userId}
              commentId={comment.id}
              onCancel={this.toggleDeleteComment}
              updateRequired={onUpdateRequired}
            />
          </CommentContent>
        )}
        <CommentActions>
          {isUserComment && (
            <ActionLink marginLeft icon onClick={this.toggleEditComment}>
              <span>
                <FaPencilAlt/>
              </span>
            </ActionLink>
          )}
          {isUserComment && (
            <ActionLink icon onClick={this.toggleDeleteComment}>
              <span>
                <FaTrashAlt/>
              </span>
            </ActionLink>
          )}
          <LikesComment
            comment={comment}
            userId={userId}
            onUpdateRequired={onUpdateRequired}
            onAuthRequired={onAuthRequired}
          />
        </CommentActions>
      </CommentBox>
    );
  }

  handleLike = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  toggleEditComment = () => {
    this.setState({
      showEditComment: !this.state.showEditComment,
      showDeleteComment: false
    })
  };

  toggleDeleteComment = () => {
    this.setState({
      showDeleteComment: !this.state.showDeleteComment,
      showEditComment: false
    });
  }
}

export default Comment;
