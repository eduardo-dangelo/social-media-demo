import React from 'react';
import Flip from 'react-reveal/Flip';
import { FaUser } from 'react-icons/fa';
import CreateUserForm from '../../forms/CreateUserForm';
import { Box, BoxContent, BoxHeader, Col, Page, Row } from '../../elements/layout';

class CreateUser extends React.PureComponent {
  render() {
    const { updateRequired } = this.props;
    return (
      <Page>
        <Row>
          <Col/>
          <Col>
            <Box>
              <BoxHeader>
                <Flip top cascade>
                  <FaUser/>
                  Sign Up
                </Flip>
              </BoxHeader>
              <BoxContent>
                <CreateUserForm updateRequired={updateRequired}/>
              </BoxContent>
            </Box>
          </Col>
          <Col/>
        </Row>
      </Page>
    );
  }
}

export default CreateUser;