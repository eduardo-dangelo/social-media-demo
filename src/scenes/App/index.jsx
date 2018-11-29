import React from 'react';
import Login from '../Login';
import { Box, BoxContent, BoxHeader, Col, Page, Row } from '../../elements/layout'
import styled from 'styled-components'
import { variables } from '../../services/config'
import { FaBook, FaUser } from 'react-icons/fa'
import { ActionBar, ActionButton, FaCogSpin, Field, FormGroup, Label } from '../../elements/form'


class App extends React.Component {
  render() {
    const { userId, updateRequired } = this.props;

    if (!userId) {
      return <Login userId={userId} updateRequired={updateRequired}/>;
    }

    return (
      <Page>
        <Row>
          <Col size={2}>
            <Box>
              <BoxHeader>
                <FaUser/>
                Welcome Ud
              </BoxHeader>
              <BoxContent>
                <p>
                  eduardo@smd.com
                </p>
                <p>
                  settings
                </p>
              </BoxContent>
            </Box>
          </Col>
          <Col size={6}>
            <Box>
              <BoxHeader>
                What are you thinking Eduardo?
              </BoxHeader>
                <Row>
                  <Col size={8}>
                    <FormGroup>
                      <Field
                        // value={this.state.email}
                        placeholder='Email address'
                        // onChange={(e) => this.setState({email: e.target.value})}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <ActionBar>
                    <ActionButton type="submit" disabled={true}>
                      Post
                    </ActionButton>
                    </ActionBar>
                  </Col>
                </Row>
            </Box>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default App;