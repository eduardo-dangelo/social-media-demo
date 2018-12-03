import React from 'react';
import { Box, BoxContent, BoxHeader, Col, Row } from '../../../elements/layout'
import Flip from 'react-reveal/Flip'
import CreatePostForm from '../../../forms/CreatePostForm'
import Post from '../Post';

class Posts extends React.Component {
  render() {
    const posts = [
      {
        id: '123',
        content: 'Hello World',
        user : {
          id: '666',
          name: 'Robot Cop'
        }
      },
      {
        id: '124',
        content: 'Hello World 2',
        user : {
          id: '666',
          name: 'Robot Cooper'
        }
      }
    ]


    return (
      <>
        <Box>
          <BoxHeader>
            <Flip top cascade>
              What are you thinking Eduardo?
            </Flip>
          </BoxHeader>
          <BoxContent>
            <CreatePostForm/>
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
}

export default Posts