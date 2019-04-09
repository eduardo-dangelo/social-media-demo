import React from 'react';
import { PostContext } from './index';
import Post from '../Post';
import { CurrentUser } from '../index';

class AllPosts extends React.Component {
  render() {
    return (
      <CurrentUser.Consumer>
        {({ userId, onAuthRequired }) => (
          <PostContext.Consumer>
            {({ posts, onUpdateRequired }) => {
              return posts.length > 1 && posts.map((post) => {
                return (
                  <Post
                    post={post}
                    key={post.id}
                    userId={userId}
                    onUpdateRequired={onUpdateRequired}
                    onAuthRequired={onAuthRequired}
                  />
                );
              })
            }}
          </PostContext.Consumer>
        )}
      </CurrentUser.Consumer>
    )
  }
}

export default AllPosts;
