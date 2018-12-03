import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { variables } from '../config';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  position: relative;
  background: ${variables.pageBg};
`;

const BodyContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

class Shell extends React.Component {
  render() {
    const { children, userId } = this.props;
    return (
      <Container>
        <Header userId={userId}/>
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