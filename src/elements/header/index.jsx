import styled from 'styled-components'
import { variables, style } from '../../config'

export const HeaderBox = styled.div`
  width: 100%;
  padding: 0;
  min-height: 60px;
  background: ${({ theme }) => style.themes[theme ? theme : 'light'].header.bg};
  color: ${({ theme }) => style.themes[theme ? theme : 'light'].header.color};
  border-bottom: 1px solid ${({ theme }) => style.themes[theme ? theme : 'light'].header.color};
  position: relative;
  
  svg {
    color: ${({ theme }) => style.themes[theme ? theme : 'light'].box.icon.color};
    margin-right: ${variables.spaceSmall};
  }
`;

export const Container = styled.div`
  max-width: ${variables.containerMaxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border: 1px solid orange;
  min-height: 60px;
  //width: 100%;
  position: relative;
`;

export const HeaderTitle = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2em;
  font-weight: 400;
  
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
  color: ${({ theme }) => theme.header.color};
  cursor: pointer;
  
  &:hover, &:focus {
    color: ${({ theme }) => theme.header.hover.color};
    background: rgba(255,255,255,0.04);
    outline: none;
  }
`;

export const TransparentButton = styled(HeaderButton)` 
  
  &:hover {
    color: white;
    background: rgba(255,255,255,0);
  }
`;