import React from 'react';
import { FaUser } from 'react-icons/fa';
import LoginUserForm from '../../forms/LoginUserForm';
import { Box, BoxContent, BoxHeader, Page } from '../../elements/layout'
import Flip from 'react-reveal/Flip';

class Login extends React.Component {
  render() {
    const { updateRequired } = this.props;
    return (
      <Page>
        <Box>
          <BoxHeader>
            <Flip top cascade>
              <FaUser/>
              Login
            </Flip>
          </BoxHeader>
          <BoxContent>
            <LoginUserForm updateRequired={updateRequired}/>
          </BoxContent>
        </Box>
      </Page>
    );
  }
}

export default Login;