import React from 'react';
import Comments from '../Comments';
import LikesPost from '../LikesPost';
import { compose, graphql } from 'react-apollo';
import { likePost } from '../../../services/mutations';
import { ActionBar, ActionLink } from '../../../elements/form';
import { FaRegComment, FaComment} from 'react-icons/fa';
import { BoxSection } from '../../../elements/layout';
import Box from '../../../components/Box';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';

export const CurrentPostContext = React.createContext({});

class Post extends React.Component {
  state = {
    showComments: false,
    counter: 0,
    showEditPostForm: false,
    showDeletePostForm: false
  }

  render() {
    const { post, userId, onUpdateRequired } = this.props;
    const { showComments, showEditPostForm, showDeletePostForm } = this.state;
    const showPostContent = !showEditPostForm && !showDeletePostForm;

    const currentPostContextValue = {
      post: post,
      userId: userId,
      onEditPost: this.handleEditPost,
      onDeletePost: this.handleDeletePost,
      onUpdateRequired: onUpdateRequired
    };

    return (
      <CurrentPostContext.Provider value={currentPostContextValue}>
        <Box mt={15}>
          <PostHeader/>
          {showPostContent && <PostContent/>}
          {showEditPostForm && <PostEdit/>}
          {showDeletePostForm && <PostDelete/>}
          <ActionBar divider>
            <ActionLink icon onClick={this.handleToggleComments}>
              <span>
                {post.comments.length > 1 ? 'Comments' : 'comment'} {post.comments.length}
                {post.comments.length > 0 ? <FaComment/> : <FaRegComment/>}
              </span>
            </ActionLink>
            <LikesPost likes={post.likes} {...this.props}/>
          </ActionBar>
          {showComments && (
            <BoxSection>
              <Comments postId={post.id} comments={post.comments} {...this.props}/>
            </BoxSection>
          )}
        </Box>
      </CurrentPostContext.Provider>
    )
  }

  handleToggleComments = () => {
    this.setState({ showComments: !this.state.showComments })
  }

  handleEditPost = () => {
    this.setState({ showEditPostForm: !this.state.showEditPostForm, showDeletePostForm: false })
  }

  handleDeletePost = () => {
    this.setState({ showDeletePostForm: !this.state.showDeletePostForm, showEditPostForm: false, })
  }
}

export default compose(
  graphql(likePost, { name: 'likePost'})
)(Post);
