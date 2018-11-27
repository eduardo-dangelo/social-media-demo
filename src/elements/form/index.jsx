import styled from 'styled-components'
import { variables } from '../../services/config'

export const Form = styled.form`

`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${variables.space};
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
  background: ${variables.secondaryColor};
  box-shadow: inset ${variables.boxShadow};
  border: 1px solid ${variables.primaryColor};
  
  &:focus {
    box-shadow: ${variables.boxShadowHover};
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ActionButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  color: ${variables.tertiaryColor};
  background: ${variables.primaryColor};
  transition: ${variables.transition};
  
  &:hover, &:focus {
    box-shadow: ${variables.boxShadowHover};
    color: ${variables.tertiaryColorHover};
    background: ${variables.primaryColorHover};
  }
  
  @media all and (max-width: 430px) {
    flex-grow: 2;
  }
`;