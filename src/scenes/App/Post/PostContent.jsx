import React from 'react';
import Flip from 'react-reveal/Flip';
import { PostContentContainer } from '../../../elements/layout';
import { CurrentPostContext } from './index';

class PostContent extends React.Component {
  render() {
    return (
      <CurrentPostContext.Consumer>
        {({ post }) => (
          <PostContentContainer>
            <Flip cascade top>
              {post.content}
            </Flip>
          </PostContentContainer>
        )}
      </CurrentPostContext.Consumer>
    );
  }
}

export default PostContent;
