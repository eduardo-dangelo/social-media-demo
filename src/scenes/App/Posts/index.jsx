import React from 'react';
import { compose, graphql } from 'react-apollo';
import { allPosts } from '../../../services/queries';
import { PostArea } from '../../../elements/layout';
import CreatePost from './CreatePost';
import AllPosts from './AllPosts';

export const PostContext = React.createContext({});

class Posts extends React.PureComponent {
  render() {
    const { allPosts } = this.props;
    let posts = []

    if (allPosts.allPosts) {
      posts = allPosts.allPosts
    }

    const postContextValue = {
      posts: allPosts.allPosts ? allPosts.allPosts : [],
      onUpdateRequired: this.handleRefetch
    }

    return (
      <PostContext.Provider value={postContextValue}>
        <PostArea>
          <CreatePost/>
          <AllPosts/>
        </PostArea>
      </PostContext.Provider>
    )
  }

  handleRefetch = () => {
    this.props.allPosts.refetch();
  }
}

export default compose(
  graphql(allPosts, { name: 'allPosts' })
)(Posts);
