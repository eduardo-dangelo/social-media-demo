import React from 'react';
import { PostAuthor, PostDate, PostHeaderContainer } from '../../../elements/layout';
import { FaPencilAlt, FaTrashAlt, FaUser } from 'react-icons/fa';
import TimeAgo from 'react-timeago';
import { ActionLink } from '../../../elements/form';
import { CurrentPostContext } from './index';

class PostHeader extends React.Component {
  render() {
    return (
      <CurrentPostContext.Consumer>
        {({ post, onEditPost, onDeletePost, userId }) => (
          <PostHeaderContainer>
            <PostAuthor>
              <FaUser/>{' '}
              {post.author.name}
            </PostAuthor>
            <PostDate>
              <TimeAgo date={post.updatedAt} />
              {post.author.id === userId && (
                <ActionLink marginLeft icon onClick={onEditPost}>
                  <FaPencilAlt/>
                </ActionLink>
              )}
              {post.author.id === userId && (
                <ActionLink icon onClick={onDeletePost}>
                  <FaTrashAlt/>
                </ActionLink>
              )}
            </PostDate>
          </PostHeaderContainer>
        )}
      </CurrentPostContext.Consumer>
    );
  }
}

export default PostHeader;
