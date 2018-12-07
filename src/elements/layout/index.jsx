import styled from 'styled-components'
import { variables } from '../../config'

export const Page = styled.div`
  margin: auto;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  max-width: ${variables.containerMaxWidth}
`;


export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
  justify-content: flex-start;
  
  @media all and (max-width: 699px) {
    flex-direction: column;
    
    > div {
      flex-grow: 1;
      padding: ${variables.space} !important;
      padding-bottom: 0 !important;
    }
  }
`;

export const Col = styled.div`
  flex-grow: ${({ size }) => size ? size : 1};
  padding-top: ${variables.space};
  padding: ${variables.spaceSmall};
  padding-bottom: 0 !important;
  overflow: visible;
  
  &:first-child {
    padding-left: ${variables.space};
  }
  
  &:last-child {
    padding-right: ${variables.space};
  }
`;

export const Box = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid;
  transition: ${variables.transition};
  margin-top: ${({ mt }) => mt ? mt : 0 };
  
  &:hover {
    box-shadow: ${variables.boxShadow};
  }
  
  @media all and (max-width: 430px) {
    min-width: 90%;
  }
`;

export const BoxHeader = styled.div`
  padding: 10px 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: ${variables.transition};
  border-bottom: 1px solid;
  
  svg {
    margin-right: 5px;
  }
`;

export const BoxContent = styled.div`
  padding: ${variables.space};
  border-top: ${({ divider }) => divider ? '1px solid' : 'none'};
`;

export const CommentsContainer = styled.div`
  border-top: 1px solid;
  padding: ${variables.space};
  padding-left: ${variables.spaceLarge};
`;

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 18px;
  justify-content: space-between;
  padding: ${variables.space};
  transition: ${variables.transition};
  margin-bottom: ${variables.spaceSmall};
  border: 1px solid;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CommentContent = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
  
  strong {
    margin-left: ${variables.spaceSmall};
    margin-right: ${variables.spaceSmall};
  }
`;