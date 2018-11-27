import React, { PureComponent } from 'react';
import { FaUser } from 'react-icons/fa';
import CreateUserForm from './CreateUserForm';
import { Box, BoxContent, BoxHeader, PageContainer } from '../../elements/auth'
import Flip from 'react-reveal/Flip';

class CreateUser extends PureComponent {
  render() {
    return (
      <PageContainer>
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
      </PageContainer>
    );
  }
}

export default CreateUser;