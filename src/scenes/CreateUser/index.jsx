import React, { PureComponent } from 'react';
import { FaUser } from 'react-icons/fa';
import CreateUserForm from '../../forms/CreateUserForm';
import { Box, BoxContent, BoxHeader, Page } from '../../elements/layout'
import Flip from 'react-reveal/Flip';

class CreateUser extends PureComponent {
  render() {
    return (
      <Page>
        <Box>
          <BoxHeader>
            <Flip top cascade>
              <FaUser/>
              Sign Up
            </Flip>
          </BoxHeader>
          <BoxContent>
            <CreateUserForm/>
          </BoxContent>
        </Box>
      </Page>
    );
  }
}

export default CreateUser;