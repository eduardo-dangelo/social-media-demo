import React from 'react';
import { BoxContent } from '../../../elements/layout';
import { CurrentPostContext } from './index';
import DeletePostForm from '../../../forms/DeletePostForm';

class PostDelete extends React.Component {
  render() {
    return (
      <CurrentPostContext.Consumer>
        {({ post, userId, onDeletePost, onUpdateRequired }) => (
          <BoxContent midSection>
            <DeletePostForm
              userId={userId}
              postId={post.id}
              onCancel={onDeletePost}
              onUpdateRequired={onUpdateRequired}
            />
          </BoxContent>
        )}
      </CurrentPostContext.Consumer>
    );
  }
}

export default PostDelete;
