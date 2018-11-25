import React, { PureComponent } from 'react';
import styled from 'styled-components';
import logo from './graphql_logo.png';

const HeaderBox = styled.div`
  width: 100%;
  min-height: 60px;
  background: #282c34;
  color: lightgray;
  padding: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
const Title = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2em;
  
  img {
    max-width: 30px;
    margin-right: 5px;
  }
`;

const ActionBar = styled.div`
  right: 0;
  height: 100%;
  position: absolute;
`;

const Button = styled.button`
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
`

class Header extends PureComponent {
  render() {
    return (
      <HeaderBox>
        <Container>
          <Title>
            <img src={logo} />
            Social Media Demo
          </Title>
          <ActionBar>
            <Button>
              Login
            </Button>
          </ActionBar>
        </Container>
      </HeaderBox>
    );
  }
}

export default Header;