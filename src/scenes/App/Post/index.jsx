import React from 'react';
import { Box, BoxContent } from '../../../elements/layout'
import { variables } from '../../../config'
import { ActionBar, ActionLink } from '../../../elements/form'
import { FaThumbsUp, FaComment, FaUser } from 'react-icons/fa'
import Comments from '../Comments'
import Tada from 'react-reveal/Tada'

class Post extends React.Component {
  state = {
    showComments: false,
    counter: 0
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
            <Tada  spy={this.state.counter}>
              <ActionLink onClick={this.handleLike}>
                <span>
                  like 12
                  <FaThumbsUp/>
                </span>
              </ActionLink>
            </Tada>
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
    this.setState({ counter: this.state.counter + 1 });
  }
}

export default Post