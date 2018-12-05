import React from 'react';
import styled from 'styled-components';
import { variables } from '../../../config';
import CreatePostForm from '../../../forms/CreatePostForm'
import { BoxContent } from '../../../elements/layout'
import CreateCommentForm from '../../../forms/CreateCommentForm'
import { FaComment, FaThumbsUp, FaUser, FaUserCircle } from 'react-icons/fa'
import { ActionBar, ActionLink } from '../../../elements/form'
import Tada from 'react-reveal/Tada'
import Flip from 'react-reveal/Flip'

export const CommentsContainer = styled.div`
  background: ${variables.box.alt.bg};
  padding: ${variables.space};
  padding-left: ${variables.spaceLarge};
  border-top: 1px solid ${variables.box.border.color};
  border-bottom: 1px solid ${variables.box.border.color};
`;

export const CommentBox = styled.div`
  border-radius: 18px;
  padding: ${variables.space};
  background: ${variables.boxBgHover};
  border: 1px solid ${variables.box.border.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${variables.spaceSmall};
  transition: ${variables.transition};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CommentContent = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
  
  strong {
    margin-right: ${variables.spaceSmall};
    margin-left: ${variables.spaceSmall};
  }
`;

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