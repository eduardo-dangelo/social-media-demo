import React from 'react';
import { BoxContent, CommentsContainer } from '../../../elements/layout'
import CreateCommentForm from '../../../forms/CreateCommentForm'
import Comment from '../Comment'

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
                  key={comment.id}
                  userId={userId}
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
    )
  }
}

export default Comments;