import React from 'react';
import Comment from '../Comment';
import CreateCommentForm from '../../../forms/CreateCommentForm';
import { BoxContent, CommentsContainer } from '../../../elements/layout';
import { CurrentPostContext } from '../Post';

class Comments extends React.Component {
  render() {
    return (
      <CurrentPostContext.Consumer>
        {({ post, onAuthRequired, userId, onUpdateRequired }) => (
          <>
            {post.comments.length > 0 && (
              <CommentsContainer>
                {post.comments.map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      userId={userId}
                      onAuthRequired={onAuthRequired}
                      onUpdateRequired={onUpdateRequired}
                    />
                  );
                })}
              </CommentsContainer>
            )}
            <BoxContent divider>
              <CreateCommentForm
                userId={userId}
                onAuthRequired={onAuthRequired}
                onUpdateRequired={onUpdateRequired}
                postId={post.id}
              />
            </BoxContent>
          </>
        )}
      </CurrentPostContext.Consumer>
    );
  }
}

export default Comments;
