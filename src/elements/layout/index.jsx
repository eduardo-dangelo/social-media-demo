import styled from 'styled-components'
import { style, variables } from '../../config'

export const Page = styled.div`
  margin: auto;
  height: 100%;
  //display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  max-width: ${variables.containerMaxWidth}
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems ? alignItems : `center`};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : `space-around`};
  max-width: ${variables.containerMaxWidth}
  
  > div {
    flex: 1;
  }
`;


export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
  justify-content: flex-start;
  padding-top: ${variables.spaceSmall};
  
  @media all and (max-width: 799px) {
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
  max-width: ${({ navBar }) => navBar ? '300px' : 'none'};
  
  &:first-child {
    padding-left: ${variables.space};
  }
  
  &:last-child {
    padding-right: ${variables.space};
  }
  
  @media all and (max-width: 799px) {
    max-width: 100%;
  }
`;

export const PostArea = styled.div`
  margin-bottom: 60px;
`;

export const BoxContainer = styled.div`
  width: 100%;
  max-width: ${({ size }) => size ? `${size}px` : `100%`};
  overflow: hidden;
  border: 1px solid;
  transition: ${variables.transition};
  margin-top: ${({ mt }) => mt ? `${mt}px` : 0 };
  
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
  justify-content: space-between;
  transition: ${variables.transition};
  border-bottom: 1px solid;
  
  a {
    cursor: pointer;
  
    svg {
      margin-right: 0;
    }
  }
  
  svg {
    margin-right: 5px;
  }
`;

export const BoxHeaderContent = styled.div`
  max-width: 200px;
  word-wrap: break-word;
`;

export const PostHeaderContent = styled.div`
  max-width: 600px;
  word-wrap: break-word;
`;

export const BoxContent = styled.div`
  padding: ${({ midSection }) => midSection ? `${variables.space} 0` : variables.space};
  border-top: ${({ divider }) => divider ? '1px solid' : 'none'};
`;

export const PostContent = styled.h3`
  width: 100%;
  max-width: 600px;
  word-wrap: break-word;
`;

export const CommentsContainer = styled.div`
  border-top: 1px solid;
  padding: ${variables.space};
  padding-left: ${variables.spaceLarge};
  width: 100%;
  position: relative;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  
  svg {
    margin-right: ${variables.spaceSmall};
  }
`;

export const PostDate = styled.div`
  font-size: .8em;
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
  font-size: .9em;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  
  strong {
    margin-left: ${variables.spaceSmall};
    margin-right: ${variables.spaceSmall};
  }
  
  button {
    font-size: .9em;
  }
`;

export const CommentText = styled.div`
  width: auto;
  max-width: 400px;
  position: relative;
  word-wrap: break-word;
`;

export const CommentActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: .8em;
`;

export const UList = styled.div`
  margin: 0;
  padding: ${variables.spaceSmall} 0;
`;

export const LItem = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  transition: ${variables.transition};
  padding: ${variables.spaceSmall} ${variables.space};
  background: ${({ theme, active }) => active ? style.themes[theme].link.active.bg : 'transparent'};
  color: ${({ theme, active }) => active ? style.themes[theme].link.active.color : style.themes[theme].link.color};
  
  &:before {
    content: "";
    width: 50%;
    height: 300%;
    transform: rotateZ(-45deg);
    background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,0.4), rgba(255,255,255,0));
    position: absolute;
    left: -100%;
    transition: .6s ease;
    opacity: .1;
  }

  svg {
    margin-right: ${variables.spaceSmall};
  }
  
  &:hover {
    text-shadow: ${variables.boxShadow};
    
    &:before {
      left: 100%;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
`;


export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ModalBoxContainer = styled(BoxContainer)`
  position: relative;
  z-index: 3;
  box-shadow: 0 6px 22px rgba(0,0,0,0.4);
`;
