import React from 'react';
import { Box, BoxContent, BoxHeader, BoxHeaderContent, Col, PostArea, PostHeaderContent, Row } from '../../../elements/layout'
import Flip from 'react-reveal/Flip'
import CreatePostForm from '../../../forms/CreatePostForm'
import Post from '../Post';
import { compose, graphql } from 'react-apollo'
import { allPosts } from '../../../services/queries'
import Fade from 'react-reveal/Fade'

class Posts extends React.PureComponent {
  render() {
    const { userName, userId, allPosts } = this.props;
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
            <CreatePostForm userId={userId} updateRequired={this.handleRefetch}/>
          </BoxContent>
        </Box>
        {posts.map((post) => {
          return (
            <Post key={post.id} post={post} userId={userId} updateRequired={this.handleRefetch}/>
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
)(Posts)