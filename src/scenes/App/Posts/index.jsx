import React from 'react';
import { Box, BoxContent, BoxHeader, Col, Row } from '../../../elements/layout'
import Flip from 'react-reveal/Flip'
import CreatePostForm from '../../../forms/CreatePostForm'
import Post from '../Post';
import { compose, graphql } from 'react-apollo'
import { allPosts } from '../../../services/queries'
import Fade from 'react-reveal/Fade'

class Posts extends React.PureComponent {
  render() {
    // const posts = [
    //   {
    //     id: '123',
    //     content: 'Hello World',
    //     user : {
    //       id: '666',
    //       name: 'Robot Cop'
    //     },
    //     comments: [
    //       {
    //         id: '10393',
    //         content: 'dale!',
    //         user: {
    //           name: 'Judson',
    //         }
    //       },
    //       {
    //         id: '1039asd3',
    //         content: 'Eh nois meu passeiro',
    //         user: {
    //           name: 'Carlos',
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: '124',
    //     content: 'Hello World 2',
    //     user : {
    //       id: '666',
    //       name: 'Robot Cooper'
    //     },
    //     comments: []
    //   }
    // ]

    const { userName, userId, allPosts } = this.props;
    let posts = []

    if (allPosts.allPosts) {
      posts = allPosts.allPosts
    }

    return (
      <>
        <Box>
          <BoxHeader>
            <Flip top cascade>
              {`What are you thinking ${userName}?`}
            </Flip>
          </BoxHeader>
          <BoxContent>
            <CreatePostForm userId={userId} updateRequired={this.handleRefetch}/>
          </BoxContent>
        </Box>
        {posts.map((post) => {
          return (
            <Post key={post.id} post={post}/>
          );
        })}
      </>
    )
  }

  handleRefetch = () => {
    this.props.allPosts.refetch();
  }
}

export default compose(
  graphql(allPosts, { name: 'allPosts' })
)(Posts)