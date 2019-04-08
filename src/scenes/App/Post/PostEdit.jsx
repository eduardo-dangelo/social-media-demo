import React from 'react';
import EditPostForm from '../../../forms/EditPostForm';
import { BoxContent } from '../../../elements/layout';
import { CurrentPostContext } from './index';

class PostEdit extends React.Component {
  render() {
    return (
      <CurrentPostContext.Consumer>
        {({ post, userId, onEditPost }) => (
          <BoxContent midSection>
            <EditPostForm
              userId={userId}
              postId={post.id}
              postContent={post.content}
              onEditComplete={onEditPost}
            />
          </BoxContent>
        )}
      </CurrentPostContext.Consumer>
    );
  }
}

export default PostEdit;
