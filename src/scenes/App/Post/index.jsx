import React from 'react';
import { Box, BoxContent, PostAuthor, PostDate, PostHeader } from '../../../elements/layout'
import { variables } from '../../../config'
import { ActionBar, ActionLink } from '../../../elements/form'
import { FaThumbsUp, FaComment, FaUser, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import Comments from '../Comments'
import Tada from 'react-reveal/Tada'
import Flip from 'react-reveal/Flip'
import TimeAgo from 'react-timeago'

class Post extends React.Component {
  state = {
    showComments: false,
    counter: 0
  }

  render() {
    const { post } = this.props;
    console.log('post', post)
    const { showComments } = this.state;
    return (
      <Box mt={variables.space}>
        <BoxContent>
          <PostHeader>
            <PostAuthor>
              <FaUser/>{' '}
              {post.author.name}
            </PostAuthor>
            <PostDate>
              <TimeAgo date={post.updatedAt} />
              <ActionLink onClick={this.handleToggleComments}>
              <span>
                <FaPencilAlt/>
              </span>
              </ActionLink>
              <ActionLink onClick={this.handleToggleComments}>
              <span>
                <FaTrashAlt/>
              </span>
              </ActionLink>
            </PostDate>
          </PostHeader>
          <Flip cascade top>
            <h3>{post.content}</h3>
          </Flip>
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