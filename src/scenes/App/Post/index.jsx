import React from 'react';
import { Box, BoxContent, PostAuthor, PostContent, PostDate, PostHeader } from '../../../elements/layout'
import { variables } from '../../../config'
import { ActionBar, ActionLink } from '../../../elements/form'
import { FaThumbsUp, FaComment, FaUser, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import Comments from '../Comments'
import Tada from 'react-reveal/Tada'
import Flip from 'react-reveal/Flip'
import TimeAgo from 'react-timeago'
import CreatePostForm from '../../../forms/CreatePostForm'
import EditPostForm from '../../../forms/EditPostForm'
import DeletePostForm from '../../../forms/DeletePostForm'
import { compose, graphql } from 'react-apollo'
import { likePost } from '../../../services/mutations'

class Post extends React.Component {
  state = {
    showComments: false,
    counter: 0,
    editPost: false,
    deletePost: false
  }

  render() {
    const { post, userId, updateRequired } = this.props;
    const { showComments, editPost, deletePost } = this.state;
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
              {post.author.id === userId && (
                <ActionLink marginLeft onClick={this.handleEditPost}>
                  <span>
                    <FaPencilAlt/>
                  </span>
                </ActionLink>
              )}
              {post.author.id === userId && (
                <ActionLink onClick={this.handleDeletePost}>
                  <span>
                    <FaTrashAlt/>
                  </span>
                </ActionLink>
              )}
            </PostDate>
          </PostHeader>
          {!editPost && !deletePost && (
            <PostContent>
              <Flip cascade top>
                {post.content}
              </Flip>
            </PostContent>
          )}
          {editPost && (
            <BoxContent midSection>
              <EditPostForm
                userId={userId}
                postId={post.id}
                postContent={post.content}
                updateRequired={this.handleEditPost}
              />
            </BoxContent>
          )}
          {deletePost && (
            <BoxContent midSection>
              <DeletePostForm
                userId={userId}
                postId={post.id}
                onCancel={this.handleDeletePost}
                updateRequired={updateRequired}
              />
            </BoxContent>
          )}
          <ActionBar divider>
            {/*<ActionLink onClick={this.handleToggleComments}>
              <span>
                comments 3
                <FaComment/>
              </span>
            </ActionLink>*/}
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

  handleEditPost = () => {
    this.setState({ editPost: !this.state.editPost, deletePost: false })
  }

  handleDeletePost = () => {
    this.setState({ deletePost: !this.state.deletePost, editPost: false, })
  }

  handleLike = () => {
    const { likePost, post, userId } = this.props;
    likePost({
      variables: { postId: post.id, authorId: userId }
    })
    this.setState({ counter: this.state.counter + 1 });
  }
}

export default compose(
  graphql(likePost, { name: 'likePost'})
)(Post)