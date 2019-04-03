import React from 'react';
import Comments from '../Comments';
import TimeAgo from 'react-timeago';
import Flip from 'react-reveal/Flip';
import LikesPost from '../LikesPost';
import { variables } from '../../../config';
import { compose, graphql } from 'react-apollo';
import { likePost } from '../../../services/mutations';
import EditPostForm from '../../../forms/EditPostForm';
import DeletePostForm from '../../../forms/DeletePostForm';
import { ActionBar, ActionLink } from '../../../elements/form';
import { FaRegComment, FaComment, FaUser, FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { BoxContainer, BoxContent, PostAuthor, PostContent, PostDate, PostHeader } from '../../../elements/layout';

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
      <BoxContainer mt={variables.space}>
        <BoxContent>
          <PostHeader>
            <PostAuthor>
              <FaUser/>{' '}
              {post.author.name}
            </PostAuthor>
            <PostDate>
              <TimeAgo date={post.updatedAt} />
              {post.author.id === userId && (
                <ActionLink marginLeft icon onClick={this.handleEditPost}>
                  <span>
                    <FaPencilAlt/>
                  </span>
                </ActionLink>
              )}
              {post.author.id === userId && (
                <ActionLink icon onClick={this.handleDeletePost}>
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
            <ActionLink icon onClick={this.handleToggleComments}>
              <span>
                {post.comments.length > 1 ? 'Comments' : 'comment'} {post.comments.length}
                {post.comments.length > 0 ? <FaComment/> : <FaRegComment/>}
              </span>
            </ActionLink>
            <LikesPost likes={post.likes} {...this.props}/>
          </ActionBar>
        </BoxContent>
        {showComments && (
          <Comments postId={post.id} comments={post.comments} {...this.props}/>
        )}
      </BoxContainer>
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
}

export default compose(
  graphql(likePost, { name: 'likePost'})
)(Post);
