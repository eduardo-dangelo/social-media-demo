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
  border: 1px solid ${variables.headerBg};
  opacity: .8;
  
  &:focus {
    box-shadow: ${variables.boxShadowHover};
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
  padding: ${variables.buttonPadding};
  
  svg {
    margin-right: ${variables.spaceSmall};
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: ${({ divider }) => divider ? '1px dashed' : 'none'};
  padding-top: ${({ divider }) => divider ? variables.space : 0 };
`

export const ActionButton = styled.button`
  border: none;
  cursor: pointer;
  padding: ${variables.buttonPadding};
  display: flex;
  align-items: center;
  max-height: 38px;
  justify-content: space-around;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  color: ${variables.textColor};
  background: ${variables.headerBg};
  transition: ${variables.transition};
  
  svg {
    margin-left: ${variables.spaceSmall};
  }
  
  &:hover, &:focus {
    box-shadow: ${variables.boxShadowHover};
    color: ${variables.textColorHover};
    background: ${variables.headerBgHover};
  }
  
  &:disabled {
    opacity: .7;
    cursor: default;
    
    &:hover, &:focus {
      box-shadow: ${variables.boxShadow};
      color: ${variables.textColor};
      background: ${variables.headerBg};
    }
  } 
  
  @media all and (max-width: 430px) {
    flex-grow: 2;
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