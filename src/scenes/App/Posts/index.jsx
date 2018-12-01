import React from 'react';
import { Box, BoxContent, BoxHeader } from '../../../elements/layout'
import Flip from 'react-reveal/Flip'
import CreatePostForm from '../../../forms/CreatePostForm'

class Posts extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Posts