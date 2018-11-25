import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

class Shell extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <Container>
        <Header/>
        {children}
      </Container>
    );
  }
}

export default Shell;