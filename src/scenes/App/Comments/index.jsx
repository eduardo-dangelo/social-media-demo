import React from 'react';
import styled from 'styled-components';
import { variables } from '../../../config';
import CreatePostForm from '../../../forms/CreatePostForm'
import { BoxContent } from '../../../elements/layout'
import CreateCommentForm from '../../../forms/CreateCommentForm'
import { FaComment, FaThumbsUp, FaUser, FaUserCircle } from 'react-icons/fa'
import { ActionBar, ActionLink } from '../../../elements/form'

export const CommentsContainer = styled.div`
  background: #e7e2e0;
  padding: ${variables.space};
`;

export const CommentBox = styled.div`
  border-radius: 4px;
  box-shadow: ${variables.boxShadow};
  padding: ${variables.space};
  background: ${variables.boxBgHover};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class Comments extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <>
        <CommentsContainer>
          {comments.map((comment) => {
            return (
              <CommentBox key={comment.id}>
                <span>
                  <FaUser/>{' '}{comment.user.name} {comment.content}
                </span>
                <ActionLink>
                  <span>
                    like 12
                    <FaThumbsUp/>
                  </span>
                </ActionLink>
              </CommentBox>
            );
          })}
        </CommentsContainer>
        <BoxContent>
          <CreateCommentForm/>
        </BoxContent>
      </>
    )
  }
}

export default Comments;