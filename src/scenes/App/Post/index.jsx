import React from 'react';
import Comments from '../Comments';
import { compose, graphql } from 'react-apollo';
import { likePost } from '../../../services/mutations';
import { BoxSection } from '../../../elements/layout';
import Box from '../../../components/Box';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';
import ActionBar from './ActionBar';

export const CurrentPostContext = React.createContext({});

class Post extends React.Component {
  state = {
    showComments: false,
    counter: 0,
    showEditPostForm: false,
    showDeletePostForm: false
  };

  render() {
    const { post, userId, onUpdateRequired, onAuthRequired } = this.props;
    const { showComments, showEditPostForm, showDeletePostForm } = this.state;
    const showPostContent = !showEditPostForm && !showDeletePostForm;

    const currentPostContextValue = {
      post,
      userId,
      onEditPost: this.handleEditPost,
      onDeletePost: this.handleDeletePost,
      onToggleComments: this.handleToggleComments,
      onUpdateRequired,
      onAuthRequired,
    };

    return (
      <CurrentPostContext.Provider value={currentPostContextValue}>
        <Box mt={15}>
          <PostHeader/>
          {showPostContent && <PostContent/>}
          {showEditPostForm && <PostEdit/>}
          {showDeletePostForm && <PostDelete/>}
          <ActionBar/>
          {showComments && (
            <BoxSection>
              <Comments/>
            </BoxSection>
          )}
        </Box>
      </CurrentPostContext.Provider>
    );
  }

  handleToggleComments = () => {
    this.setState({ showComments: !this.state.showComments })
  };

  handleEditPost = () => {
    this.setState({
      showEditPostForm: !this.state.showEditPostForm,
      showDeletePostForm: false
    })
  };

  handleDeletePost = () => {
    this.setState({
      showDeletePostForm: !this.state.showDeletePostForm,
      showEditPostForm: false
    })
  }
}

export default compose(
  graphql(likePost, { name: 'likePost'})
)(Post);
