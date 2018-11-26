import styled from 'styled-components'

export const HeaderBox = styled.div`
  width: 100%;
  min-height: 60px;
  background: #282c34;
  color: lightgray;
  padding: 0;
`;

export const Container = styled.div`
  max-width: 1200px;
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
  color: lightgray;
  cursor: pointer;
  
  &:hover {
    background: rgba(255,255,255,0.2);
  }
`;