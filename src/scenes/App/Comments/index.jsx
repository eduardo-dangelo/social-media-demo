import React from 'react';
import Comment from '../Comment';
import CreateCommentForm from '../../../forms/CreateCommentForm';
import { BoxContent, CommentsContainer } from '../../../elements/layout';

class Comments extends React.Component {
  render() {
    const { comments, userId, postId, updateRequired } = this.props;
    return (
      <>
        {comments.length > 0 && (
          <CommentsContainer>
            {comments.map((comment) => {
              return (
                <Comment
                  userId={userId}
                  key={comment.id}
                  comment={comment}
                  updateRequired={updateRequired}
                />
              );
            })}
          </CommentsContainer>
        )}
        <BoxContent divider>
          <CreateCommentForm
            userId={userId}
            postId={postId}
            updateRequired={updateRequired}
          />
        </BoxContent>
      </>
    );
  }
}

export default Comments;
