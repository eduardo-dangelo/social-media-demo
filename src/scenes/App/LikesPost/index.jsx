import React from 'react';
import Tada from 'react-reveal/Tada'
import { ActionLink, ActionLinkContent } from '../../../elements/form'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'
import { compose, graphql } from 'react-apollo'
import { dislikePost, likePost } from '../../../services/mutations'

class LikesPost extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    const { likes, post, userId } = this.props;
    let liked = false;
    let likeId = null;

    post.likes.forEach((like) => {
      if (like.author.id === userId) {
        liked = true;
        likeId = like.id
      }
    })

    return (
      <ActionLink onClick={liked ? this.handleDislike(likeId) : this.handleLike}>
        <ActionLinkContent>
          {likes.length > 1 ? 'LikesPost' : 'Like'} {likes.length}
          <Tada  spy={this.state.counter}>
            {liked ? <FaThumbsUp/> : <FaRegThumbsUp/>}
          </Tada>
        </ActionLinkContent>
      </ActionLink>
    )
  }

  handleLike = () => {
    const { likePost, post, userId, updateRequired } = this.props;
    likePost({
      variables: { postId: post.id, authorId: userId }
    })
      .then(() => (
        updateRequired()
      ))
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDislike = (likeId) => () => {
    const { dislikePost, updateRequired } = this.props;

    dislikePost({
      variables: { id: likeId }
    })
      .then(() => (
        updateRequired()
      ))
    this.setState({ counter: this.state.counter - 1 });
  }
}

export default compose(
  graphql(likePost, { name: 'likePost'}),
  graphql(dislikePost, { name: 'dislikePost'})
)(LikesPost)