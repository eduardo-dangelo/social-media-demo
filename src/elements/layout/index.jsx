import styled from 'styled-components'
import { variables } from '../../config'

export const Page = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  max-width: ${variables.containerMaxWidth}
`;


export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: visible;
  
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
  padding: ${variables.spaceSmall};
  padding-top: ${variables.space};
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
  border-radius: 0;
  overflow: hidden;
  //padding: 15px;
  //min-width: 400px;
  //min-height: 150px;
  width: 100%;
  background: ${variables.boxBg};
  box-shadow: ${variables.boxShadow};
  transition: ${variables.transition};
  border: 1px solid ${variables.headerBg};
  margin-top: ${({ mt }) => mt ? mt : 0 };
  
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
  background: ${variables.headerBg};
  color: ${variables.textColor};
  transition: ${variables.transition};
  
  svg {
    margin-right: 5px;
  }
`;

export const BoxContent = styled.div`
  padding: ${variables.space};
`;