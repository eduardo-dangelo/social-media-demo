import styled from 'styled-components'
import { variables } from '../../services/config'

export const Page = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  max-width: ${variables.containerMaxWidth}
`;

export const Box = styled.div`
  border-radius: 0;
  overflow: hidden;
  //padding: 15px;
  min-width: 400px;
  min-height: 150px;
  background: ${variables.boxBg};
  box-shadow: ${variables.boxShadow};
  transition: ${variables.transition};
  border: 1px solid ${variables.primaryColor};
  margin: ${variables.spaceLarge} ${variables.space};
  
  &:hover {
    background: ${variables.boxBgHover};
    box-shadow: ${variables.boxShadowHover};
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
  background: ${variables.primaryColor};
  color: ${variables.tertiaryColor};
  transition: ${variables.transition};
  
  svg {
    margin-right: 5px;
  }
`;

export const BoxContent = styled.div`
  padding: ${variables.space};
`;