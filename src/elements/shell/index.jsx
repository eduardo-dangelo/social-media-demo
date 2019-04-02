import styled from 'styled-components'
import { variables } from '../../config'
import { BoxContainer, BoxContent, BoxHeader, CommentBox, CommentsContainer } from '../layout'
import { ActionBar, ActionButton, ActionLink, ErrorBox, Field, RadioButton } from '../form'

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

export const BodyContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  position: relative;
  transition: ${variables.transitionLarge};
  background: ${({ styles }) => styles.theme.page.bg};
  
  ${BoxContainer} {
    background: ${({ styles }) => styles.theme.box.bg};
    color: ${({ styles }) => styles.theme.box.color};
    border-color: ${({ styles }) => styles.theme.box.border.color};
    border-radius: ${({ styles }) => styles.theme.box.border.radius};
    transition: ${variables.transitionLarge};
    
    svg {
      color: ${({ styles }) => styles.theme.box.icon.color};
    }
  }
  
  ${BoxHeader} {
    color: ${({ styles }) => styles.theme.header.color};
    background: ${({ styles }) => styles.theme.header.bg};
    border-color: ${({ styles }) => styles.theme.box.border.color};
    transition: ${variables.transitionLarge};
  }
  
  ${BoxContent} {
    border-color: ${({ styles }) => styles.theme.box.border.color};
  }
  
  ${CommentsContainer} {
    background: ${({ styles }) => styles.theme.box.alt.bg};
    border-color: ${({ styles }) => styles.theme.box.border.color};
  } 
  
  ${CommentBox} {
    background: ${({ styles }) => styles.theme.box.bg};
    border-color: ${({ styles }) => styles.theme.box.border.color};
  } 
  
  ${Field} {
    background: ${({ styles }) => styles.theme.input.bg};
    border-color: ${({ styles }) => styles.theme.box.border.color};
    color: ${({ styles }) => styles.theme.input.color};
    transition: ${variables.transitionLarge};
  }
  
  ${ActionButton} {
    background: ${({ styles }) => styles.theme.button.bg};
    color: ${({ styles }) => styles.theme.button.color};
    padding: ${({ styles }) => styles.theme.button.padding};
    border-radius: ${({ styles }) => styles.theme.button.border.radius};
    
    &:hover {
      background: ${({ styles }) => styles.theme.button.hover.bg};
      color: ${({ styles }) => styles.theme.button.hover.color};  
    }
    
    &:disabled {
    
      svg {
        color: ${({styles}) => styles.theme.button.color};  
      }
    }
  }
  
  ${RadioButton} {
    padding: ${({ styles }) => styles.theme.button.padding};
    border-radius: ${({ styles }) => styles.theme.button.border.radius} 0 0 ${({ styles }) => styles.theme.button.border.radius};
    border-color: ${({ styles }) => styles.theme.box.border.color};
    
    &:last-child {
      border-radius: 0 ${({ styles }) => styles.theme.button.border.radius} ${({ styles }) => styles.theme.button.border.radius} 0;
    }
  }
  
  ${ActionLink} {
    color: ${({ styles }) => styles.theme.link.color};
    
    &:hover {
      color: ${({ styles }) => styles.theme.link.hover.color};  
    }
  }
  
  ${ActionBar} {
    border-color: ${({ styles }) => styles.theme.box.color};
  }
  
  ${ErrorBox} {
    border-color: ${({ styles }) => styles.theme.box.error.color};
    color: ${({ styles }) => styles.theme.box.error.color};
    background: ${({ styles }) => styles.theme.box.error.bg};
  }
`;

export const BodyContent = styled.div`
  max-width: 1200px;
  margin: auto;
`;