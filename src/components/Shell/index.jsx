import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { graphql, compose } from 'react-apollo';
import { loggedInUser } from '../../services/queries'

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

class Shell extends React.Component {
  render() {
    const { children, user } = this.props
    console.log('this.props', this.props)
    let userId = null;

    if (user.loggedInUser && user.loggedInUser.id) {
      userId = user.loggedInUser.id;
    }

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

export default compose(
  graphql(loggedInUser, {
    name: 'user',
    options: { fetchPolicy: 'network-only' }
  }),
)(Shell);