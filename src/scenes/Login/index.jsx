import React from 'react';
import { FaUser } from 'react-icons/fa';
import LoginUserForm from './LoginUserForm';
import { Box, BoxContent, BoxHeader, PageContainer } from '../../elements/auth'
import Flip from 'react-reveal/Flip';

class Login extends React.Component {
  render() {
    return (
      <PageContainer>
        <Box>
          <BoxHeader>
            <Flip top cascade>
              <FaUser/>
              Login
            </Flip>
          </BoxHeader>
          <BoxContent>
            <LoginUserForm/>
          </BoxContent>
        </Box>
      </PageContainer>
    );
  }
}

export default Login;