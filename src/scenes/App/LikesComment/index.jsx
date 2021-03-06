import React from 'react';
import Tada from 'react-reveal/Tada';
import { compose, graphql } from 'react-apollo';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { ActionLink, ActionLinkContent } from '../../../elements/form';
import { dislikeComment, likeComment } from '../../../services/mutations';

class LikesComment extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    const { comment, userId } = this.props;
    const likes = comment.likes;
    let liked = false;
    let likeId = null;

    likes.forEach((like) => {
      if (like.author.id === userId) {
        liked = true;
        likeId = like.id
      }
    })

    return (
      <ActionLink icon onClick={liked ? this.handleDislike(likeId) : this.handleLike}>
        <ActionLinkContent>
          {likes.length > 1 ? 'Likes' : 'Like'} {likes.length}
          <Tada  spy={this.state.counter}>
            {liked ? <FaThumbsUp/> : <FaRegThumbsUp/>}
          </Tada>
        </ActionLinkContent>
      </ActionLink>
    )
  }

  handleLike = () => {
    const { likeComment, comment, userId, onUpdateRequired, onAuthRequired } = this.props;

    if (userId) {
      likeComment({
        variables: { commentId: comment.id, authorId: userId }
      })
        .then(() => (
          onUpdateRequired()
        ))
      this.setState({ counter: this.state.counter + 1 });
    } else {
      onAuthRequired()
    }
  }

  handleDislike = (likeId) => () => {
    const { dislikeComment, onUpdateRequired } = this.props;

    dislikeComment({
      variables: { id: likeId }
    })
      .then(() => (
        onUpdateRequired()
      ))
    this.setState({ counter: this.state.counter - 1 });
  }
}

export default compose(
  graphql(likeComment, { name: 'likeComment'}),
  graphql(dislikeComment, { name: 'dislikeComment'})
)(LikesComment);
