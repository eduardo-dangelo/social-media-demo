import styled, { keyframes } from 'styled-components'
import { variables } from '../../config'
import { FaCog } from 'react-icons/fa'
import { style } from '../../config'

export const Form = styled.form`
  width: ${({ expand }) => expand ? '98%' : '100%'};
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ noMargin }) => noMargin ? 0 : variables.space};
  
  button {
    margin-left: ${variables.spaceSmall};
  }
`

export const Label = styled.div`
  font-size: .9em;
  min-width: 100px;
  
  @media all and (max-width: 430px) {
    display: none;
  }
`;

export const Field = styled.input`
  flex-grow: 1;
  opacity: .8;
  padding: 10px;
  font-size: .9em;
  min-width: 60px;
  border-radius: 18px;
  border: 1px solid;
  box-shadow: inset ${variables.boxShadow};
  
  &:focus {
    opacity: 1;
    outline: none;
    box-shadow: ${variables.boxShadowHover};
  }
`;

export const ActionButton = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  max-height: 38px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  transition: ${variables.transition};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    transform: rotateZ(-45deg);
    background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,0));
    position: absolute;
    left: -100%;
    transition: .4s ease;
    opacity: .1;
  }
  
  span {
    display: flex;
    align-items: center;
  }
  
  svg {
    margin-left: ${variables.spaceSmall};
  }
  
  &:hover, &:focus {
    outline: none;
    box-shadow: ${variables.boxShadow};
    
    &:before {
      left: 100%;
    }
  }
  
  &:disabled {
    //opacity: .7;
    cursor: not-allowed;
    
    &:hover, &:focus {
      box-shadow: none;
      
    &:before {
      left: 100%;
    }
    }
  } 
  
  @media all and (max-width: 430px) {
    flex-grow: 2;
  }
`;

export const RadioButton = styled.button`
  display: flex;
  cursor: pointer;
  border: 1px solid;
  align-items: center;
  margin-left: 0 !important;
  justify-content: space-around;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  transition: ${variables.transition};
  background: ${({ activeTheme, active }) => active ? style.themes[activeTheme].button.bg : style.themes[activeTheme].button.alt.bg};
  color: ${({ activeTheme, active }) => active ? style.themes[activeTheme].button.color : style.themes[activeTheme].button.alt.color};
  
  &:last-child {
    margin-left: 0;
    border-left: none;
  }
  
  &:hover {
    background: ${({ activeTheme, active }) => active ? style.themes[activeTheme].button.hover.bg : style.themes[activeTheme].button.alt.hover.bg};
    color: ${({ activeTheme, active }) => active ? style.themes[activeTheme].button.hover.color : style.themes[activeTheme].button.alt.hover.color};  
  }
  
  svg {
    margin-right: ${variables.spaceSmall};
  }
  
  &:focus {
    outline: none;
  }
`;

export const ActionBarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : `flex-end`};
  border-top: ${({ divider }) => divider ? '1px dashed' : 'none'};
  padding-top: ${({ divider }) => divider ? variables.space : 0 };
`;

export const SuccessMessage = styled.div`
  margin-right: ${variables.spaceSmall};
  font-size: .8em;
`;

export const ButtonContent = styled.span`
  padding: 0;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`;



export const ActionLink = styled.a`
  font-weight: 500;
  cursor: pointer;
  transition: ${variables.transition};
  margin-left: ${({ marginLeft }) => marginLeft ? variables.spaceSmall : '0'};
  position: relative;
  
  &:before {
    content: "";
    border-bottom: 2px solid;
    width: 0;
    position: absolute;
    left: 0;
    bottom: -2px;
    transition: .3s ease;
    opacity: 0.7;
  }
  
  &:hover {
    text-decoration: none;
    text-shadow: ${variables.boxShadow};
    
    &:before {
      width: calc(100% - ${({ icon }) => icon ? `25px` : `0px`});
    }
  }
  
  svg, &:last-child {
    margin-left: ${variables.spaceSmall};
  }
`;

export const ActionLinkContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

export const FaCogSpin = styled(FaCog)`
  animation: ${rotate} 1.4s linear infinite;
`;

export const ErrorBox = styled.div`
  border-radius: ${variables.buttonBorderRadius};
  padding: ${variables.space};
  margin-bottom: ${variables.space};
  border: 1px solid;
`;