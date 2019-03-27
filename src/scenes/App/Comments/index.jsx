import React from 'react';
import Comment from '../Comment';
import CreateCommentForm from '../../../forms/CreateCommentForm';
import { BoxContent, CommentsContainer } from '../../../elements/layout';

class Comments extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <>
        {comments.length > 0 && (
          <CommentsContainer>
            {comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  {...this.props}
                />
              );
            })}
          </CommentsContainer>
        )}
        <BoxContent divider>
          <CreateCommentForm {...this.props}/>
        </BoxContent>
      </>
    );
  }
}

export default Comments;
