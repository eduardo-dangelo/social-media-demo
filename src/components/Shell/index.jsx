import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  position: relative;
  background: #efe3ff;
`;

const BodyContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

class Shell extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <Container>
        <Header/>
        <Body>
          <BodyContainer>
            {children}
          </BodyContainer>
        </Body>
      </Container>
    );
  }
}

export default Shell;