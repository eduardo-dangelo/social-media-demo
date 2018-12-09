import React from 'react';
import Tada from 'react-reveal/Tada'
import { ActionLink, ActionLinkContent } from '../../../elements/form'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'
import { compose, graphql } from 'react-apollo'
import { dislikeComment, likeComment } from '../../../services/mutations'

class LikesComment extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    const { likes, comment, userId } = this.props;
    let liked = false;
    let likeId = null;

    comment.likes.forEach((like) => {
      if (like.author.id === userId) {
        liked = true;
        likeId = like.id
      }
    })

    return (
      <ActionLink onClick={liked ? this.handleDislike(likeId) : this.handleLike}>
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
    const { likeComment, comment, userId, updateRequired } = this.props;
    likeComment({
      variables: { commentId: comment.id, authorId: userId }
    })
      .then(() => (
        updateRequired()
      ))
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDislike = (likeId) => () => {
    const { dislikeComment, updateRequired } = this.props;

    dislikeComment({
      variables: { id: likeId }
    })
      .then(() => (
        updateRequired()
      ))
    this.setState({ counter: this.state.counter - 1 });
  }
}

export default compose(
  graphql(likeComment, { name: 'likeComment'}),
  graphql(dislikeComment, { name: 'dislikeComment'})
)(LikesComment)