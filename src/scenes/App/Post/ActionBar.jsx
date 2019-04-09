import React from 'react';
import { CurrentPostContext } from './index';
import { ActionBarContainer, ActionLink } from '../../../elements/form';
import LikesPost from '../LikesPost';
import { FaComment, FaRegComment } from 'react-icons/fa';

class ActionBar extends React.Component {
  render() {
    return (
      <CurrentPostContext.Consumer>
        {({ post, onToggleComments, userId, onUpdateRequired, onAuthRequired }) => {

          const commentsSize = post.comments.length;
          const commentsIcon = commentsSize > 0 ? <FaComment/> : <FaRegComment/>;
          const commentsLabel = commentsSize > 1 ? 'Comments' : 'Comment';

          return (
            <ActionBarContainer divider>
              <ActionLink icon onClick={onToggleComments}>
                <span>
                  {commentsLabel} {commentsSize}
                  {commentsIcon}
                </span>
              </ActionLink>
              <LikesPost
                post={post}
                userId={userId}
                onUpdateRequired={onUpdateRequired}
                onAuthRequired={onAuthRequired}
              />
            </ActionBarContainer>
          )}
        }
      </CurrentPostContext.Consumer>
    );
  }
}

export default ActionBar;