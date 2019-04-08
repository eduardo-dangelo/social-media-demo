import React from 'react';
import CreatePostForm from '../../../forms/CreatePostForm'
import Box from '../../../components/Box'
import { CurrentUser } from '../index'
import { PostContext } from './index'

class CreatePost extends React.Component {
  render() {
    return (
      <CurrentUser.Consumer>
        {({ userName, userId, onAuthRequired }) => (
          <PostContext.Consumer>
            {({ onUpdateRequired }) => (
              <Box header={`What are you thinking ${userName}?`}>
                <CreatePostForm
                  userId={userId}
                  onUpdateRequired={onUpdateRequired}
                  onAuthRequired={onAuthRequired}
                />
              </Box>
            )}
          </PostContext.Consumer>
        )}
      </CurrentUser.Consumer>
    )
  }
}

export default CreatePost