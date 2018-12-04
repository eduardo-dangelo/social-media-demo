import React from 'react';
import styled from 'styled-components';
import { variables } from '../../../config';
import CreatePostForm from '../../../forms/CreatePostForm'
import { BoxContent } from '../../../elements/layout'
import CreateCommentForm from '../../../forms/CreateCommentForm'
import { FaComment, FaThumbsUp, FaUser, FaUserCircle } from 'react-icons/fa'
import { ActionBar, ActionLink } from '../../../elements/form'

export const CommentsContainer = styled.div`
  background: ${variables.box.alt.bg};
  padding: ${variables.space};
  padding-left: ${variables.spaceLarge};
  border-top: 1px solid ${variables.box.border.color};
  border-bottom: 1px solid ${variables.box.border.color};
`;

export const CommentBox = styled.div`
  border-radius: 20px;
  box-shadow: ${variables.boxShadow};
  padding: ${variables.space};
  background: ${variables.boxBgHover};
  border: 1px solid ${variables.box.border.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${variables.spaceSmall};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

class Comments extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <>
        {comments.length > 0 && (
          <CommentsContainer>
            {comments.map((comment) => {
              return (
                <CommentBox key={comment.id}>
                  <span>
                    <FaUser/>{' '} <strong>{comment.user.name}</strong> {comment.content}
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
        )}
        <BoxContent>
          <CreateCommentForm/>
        </BoxContent>
      </>
    )
  }
}

export default Comments;