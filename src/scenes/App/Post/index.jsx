import React from 'react';
import { Box, BoxContent } from '../../../elements/layout'
import { variables } from '../../../config'
import { ActionBar, ActionLink } from '../../../elements/form'
import { FaThumbsUp, FaComment, FaUser } from 'react-icons/fa'
import Comments from '../Comments'


class Post extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <Box mt={variables.space}>
        <BoxContent>
          <FaUser/>{' '}
          {post.user.name}
          <h3>{post.content}</h3>
          <ActionBar divider>
            <ActionLink>
              <span>
                comments 3
                <FaComment/>
              </span>
            </ActionLink>
            <ActionLink>
              <span>
                like 12
                <FaThumbsUp/>
              </span>
            </ActionLink>
          </ActionBar>
        </BoxContent>
        <Comments comments={post.comments}/>
      </Box>
    )
  }
}

export default Post