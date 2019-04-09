import React from 'react';
import Tada from 'react-reveal/Tada';
import { compose, graphql } from 'react-apollo';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { dislikePost, likePost } from '../../../services/mutations';
import { ActionLink, ActionLinkContent } from '../../../elements/form';

class LikesPost extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    const { post, userId } = this.props;
    const likes = post.likes;
    let liked = false;
    let likeId = null;

    likes.forEach((like) => {
      if (like.author.id === userId) {
        liked = true;
        likeId = like.id
      }
    });

    return (
      <ActionLink icon onClick={liked ? this.handleDislike(likeId) : this.handleLike}>
        <ActionLinkContent>
          {likes.length > 1 ? 'Likes' : 'Like'} {likes.length}
          <Tada  spy={this.state.counter}>
            {liked ? <FaThumbsUp/> : <FaRegThumbsUp/>}
          </Tada>
        </ActionLinkContent>
      </ActionLink>
    );
  }

  handleLike = () => {
    const { likePost, post, userId, onUpdateRequired, onAuthRequired } = this.props;

    if (userId) {
      likePost({
        variables: { postId: post.id, authorId: userId }
      })
        .then(() => (
          onUpdateRequired()
        ));
      this.setState({ counter: this.state.counter + 1 });
    } else {
      onAuthRequired()
    }
  }

  handleDislike = (likeId) => () => {
    const { dislikePost, onUpdateRequired } = this.props;

    dislikePost({
      variables: { id: likeId }
    })
      .then(() => (
        onUpdateRequired()
      ));
    this.setState({ counter: this.state.counter - 1 });
  }
}

export default compose(
  graphql(likePost, { name: 'likePost'}),
  graphql(dislikePost, { name: 'dislikePost'})
)(LikesPost);
