import React from 'react';
import { Box, BoxContent } from '../../../elements/layout'
import { variables } from '../../../config'
import { ActionBar, ActionLink } from '../../../elements/form'
import { FaThumbsUp, FaComment, FaUser } from 'react-icons/fa'
import Comments from '../Comments'


class Post extends React.Component {
  state = {
    showComments: false,
  }

  render() {
    const { post } = this.props;
    const { showComments } = this.state;
    return (
      <Box mt={variables.space}>
        <BoxContent>
          <FaUser/>{' '}
          {post.user.name}
          <h3>{post.content}</h3>
          <ActionBar divider>
            <ActionLink onClick={this.handleToggleComments}>
              <span>
                comments 3
                <FaComment/>
              </span>
            </ActionLink>
            <ActionLink onClick={this.handleLike}>
              <span>
                like 12
                <FaThumbsUp/>
              </span>
            </ActionLink>
          </ActionBar>
        </BoxContent>
        {showComments && (
          <Comments comments={post.comments}/>
        )}
      </Box>
    )
  }

  handleToggleComments = () => {
    this.setState({ showComments: !this.state.showComments })
  }

  handleLike = () => {
    //
  }
}

export default Post