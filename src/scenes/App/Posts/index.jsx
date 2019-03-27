import React from 'react';
import Post from '../Post';
import Flip from 'react-reveal/Flip';
import { compose, graphql } from 'react-apollo';
import { allPosts } from '../../../services/queries';
import CreatePostForm from '../../../forms/CreatePostForm';
import { Box, BoxContent, BoxHeader, PostArea, PostHeaderContent } from '../../../elements/layout';

class Posts extends React.PureComponent {
  render() {
    const { userName, allPosts } = this.props;
    let posts = []

    if (allPosts.allPosts) {
      posts = allPosts.allPosts
    }

    return (
      <PostArea>
        <Box>
          <BoxHeader>
            <PostHeaderContent>
              <Flip top cascade>
                {`What are you thinking ${userName}?`}
              </Flip>
            </PostHeaderContent>
          </BoxHeader>
          <BoxContent>
            <CreatePostForm
              updateRequired={this.handleRefetch}
              {...this.props}
            />
          </BoxContent>
        </Box>
        {posts.map((post) => {
          return (
            <Post
              post={post}
              key={post.id}
              updateRequired={this.handleRefetch}
              {...this.props}
            />
          );
        })}
      </PostArea>
    )
  }

  handleRefetch = () => {
    this.props.allPosts.refetch();
  }
}

export default compose(
  graphql(allPosts, { name: 'allPosts' })
)(Posts);
