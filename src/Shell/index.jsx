import React from 'react';
import Header from '../Header';
import { Body, BodyContainer, Container } from '../elements/shell'

class Shell extends React.Component {
  render() {
    const { children, userId, theme, styles } = this.props;
    return (
      <Container>
        <Header userId={userId} styles={styles}/>
        <Body theme={theme} styles={styles}>
          <BodyContainer>
            {children}
          </BodyContainer>
        </Body>
      </Container>
    );
  }
}

export default Shell;
