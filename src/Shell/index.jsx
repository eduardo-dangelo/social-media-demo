import React from 'react';
import Header from '../components/Header';
import { Container } from '../elements/shell';
import Body from '../components/Body';

class Shell extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Header/>
        <Body>
          {children}
        </Body>
      </Container>
    );
  }
}

export default Shell;
