import styled, { keyframes } from 'styled-components'
import { variables } from '../../config'
import { FaCog } from 'react-icons/fa'

export const Form = styled.form`

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
  padding: 10px;
  font-size: .9em;
  flex-grow: 1;
  background: ${variables.pageBg};
  box-shadow: inset ${variables.boxShadow};
  border: 1px solid ${variables.box.border.color};
  border-radius: 18px;
  opacity: .8;
  min-width: 60px;
  
  &:focus {
    box-shadow: ${variables.boxShadowHover};
    outline: none;
    opacity: 1;
  }
`;

export const RadioButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  color: ${({ active }) => active ? variables.textColor : variables.headerBg };
  background: ${({ active }) => active ? variables.headerBg : variables.textColor };
  transition: ${variables.transition};
  border: 1px solid ${({ active }) => active ? 'transparent' : variables.headerBg };
  padding: ${variables.button.padding};
  border-radius: ${variables.button.border.radius} 0 0 ${variables.button.border.radius};
  margin-left: 0 !important;
  cursor: pointer;
  
  &:last-child {
    border-radius: 0 ${variables.button.border.radius} ${variables.button.border.radius} 0;
    margin-left: 0;
  }
  
  svg {
    margin-right: ${variables.spaceSmall};
  }
  
  &:focus {
    outline: none;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: ${({ divider }) => divider ? '1px dashed' : 'none'};
  border-color: ${variables.box.border.color};
  padding-top: ${({ divider }) => divider ? variables.space : 0 };
  position: relative;
  
  // &:before {
  //   content: "";
  //   background: ${variables.pageBg};
  //   width: 25px;
  //   height: 25px;
  //   border-radius: 50%;
  //   position: absolute;
  //   left: -30px;
  //   top: -15px;
  // }
  //
  //   &:after {
  //   content: "";
  //   background: ${variables.pageBg};
  //   width: 25px;
  //   height: 25px;
  //   border-radius: 50%;
  //   position: absolute;
  //   right: -30px;
  //   top: -15px;
  // }
`

export const ActionButton = styled.button`
  border: none;
  cursor: pointer;
  padding: ${variables.button.padding};
  display: flex;
  align-items: center;
  max-height: 38px;
  border-radius: ${variables.button.border.radius};
  justify-content: space-around;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  color: ${variables.button.color};
  background: ${variables.button.bg};
  transition: ${variables.transition};
  
  span {
    display: flex;
    align-items: center;
  }
  
  svg {
    margin-left: ${variables.spaceSmall};
  }
  
  &:hover, &:focus {
    box-shadow: ${variables.boxShadow};
    color: ${variables.button.hover.color};
    outline: none;
  }
  
  &:disabled {
    opacity: .7;
    cursor: default;
    
    svg {
      color: ${variables.button.color};
    }
    
    &:hover, &:focus {
      box-shadow: none;
    }
  } 
  
  @media all and (max-width: 430px) {
    flex-grow: 2;
  }
`;

export const ActionLink = styled.a`
  color: ${variables.link.color};
  font-weight: 500;
  cursor: pointer;
  transition: ${variables.transition};
  
  svg, &:last-child {
    margin-left: ${variables.spaceSmall};
  }
  
  &:hover {
    color: ${variables.link.hover.color};
    text-shadow: ${variables.boxShadow};
  }
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
  padding: ${variables.space};
  border: 1px solid #6f6bcf;
  background: #bfbeff;
  color: #6f6bcf;
  margin-bottom: ${variables.space};
`;