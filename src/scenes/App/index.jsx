import React from 'react';
import Login from '../Login';
import { Page } from '../../elements/layout'
import styled from 'styled-components'
import { variables } from '../../services/config'

const Row = styled.div`
  //border: 1px solid red;
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  
  > div {
    //border: 2px dashed green;
  }
`;

const Col = styled.div`
  flex-grow: ${({ size }) => size ? size : 1};
  padding: ${variables.spaceSmall};
  padding-top: ${variables.space};
  padding-bottom: ${variables.space};
  
  &:first-child {
    padding-left: ${variables.space};
  }
  
  &:last-child {
    padding-right: ${variables.space};
  }
  
  > div {
    border: 1px red solid;
  }
`;

class App extends React.Component {
  render() {
    const { userId, updateRequired } = this.props;

    if (!userId) {
      return <Login userId={userId} updateRequired={updateRequired}/>;
    }

    return (
      <Page>
        <Row>
          <Col size={3}>
            <div>
              test
            </div>
          </Col>
          <Col size={6}>
            <div>
              test
            </div>
          </Col>
          <Col size={2}>
            <div>
              test
            </div>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default App;