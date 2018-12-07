import styled from 'styled-components'
import { variables } from '../../config'

export const HeaderBox = styled.div`
  width: 100%;
  padding: 0;
  min-height: 60px;
  background: ${({ styles }) => styles.theme.header.bg};
  color: ${({ styles }) => styles.theme.header.color};
  border-bottom: 1px solid ${({ styles }) => styles.theme.header.color};
`;

export const Container = styled.div`
  max-width: ${variables.containerMaxWidth};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const HeaderTitle = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2em;
  
  img {
    max-width: 30px;
    margin-right: 10px;
  }
`;

export const HeaderActionBar = styled.div`
  right: 0;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderButton = styled.button`
  border: none;
  height: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  justify-content: space-around;
  transition: .3s ease;
  padding: 15px;
  color: ${({ styles }) => styles.theme.header.color};
  cursor: pointer;
  
  &:hover {
    color: ${({ styles }) => styles.theme.header.hover.color};
    background: rgba(255,255,255,0.04);
  }
`;

export const TransparentButton = styled(HeaderButton)` 
  
  &:hover {
    color: white;
    background: rgba(255,255,255,0);
  }
`;