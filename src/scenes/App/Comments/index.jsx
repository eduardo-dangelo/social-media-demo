import React from 'react';
import { BoxContent, CommentBox, CommentContent, CommentsContainer } from '../../../elements/layout'
import CreateCommentForm from '../../../forms/CreateCommentForm'
import {FaThumbsUp, FaUser } from 'react-icons/fa'
import { ActionLink } from '../../../elements/form'
import Tada from 'react-reveal/Tada'
import Flip from 'react-reveal/Flip'

class Comments extends React.Component {
  state = {
    counter: 0
  }

  render() {
    const { comments } = this.props;
    return (
      <>
        {comments.length > 0 && (
          <CommentsContainer>
            {comments.map((comment) => {
              return (
                <CommentBox key={comment.id}>
                  <CommentContent>
                    <FaUser/>
                    {' '}
                    <strong>{comment.user.name}</strong>
                    <Flip cascade top>
                      {comment.content}
                    </Flip>
                  </CommentContent>
                  <Tada  spy={this.state.counter}>
                    <ActionLink onClick={this.handleLike}>
                      <span>
                        like 12
                        <FaThumbsUp/>
                      </span>
                    </ActionLink>
                  </Tada>
                </CommentBox>
              );
            })}
          </CommentsContainer>
        )}
        <BoxContent>
          <CreateCommentForm/>
        </BoxContent>
      </>
    )
  }

  handleLike = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
}

export default Comments;