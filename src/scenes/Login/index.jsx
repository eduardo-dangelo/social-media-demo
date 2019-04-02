import React from 'react';
import { FaUser } from 'react-icons/fa';
import LoginUserForm from '../../forms/LoginUserForm';
import { FlexBox, Page } from '../../elements/layout'
import { UserContext } from '../index'
import Box from '../../components/Box'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ userId, updateRequired }) => {

          if (userId) {
            return <Redirect to={'/social-media-demo/'}/>
          }

          return (
            <Page>
              <FlexBox
                alignItems={'center'}
                justifyContent={'space-around'}
              >
                <Box
                  size={480}
                  mt={60}
                  header={(
                    <><FaUser/> Login</>
                  )}
                >
                  <LoginUserForm
                    updateRequired={updateRequired}
                  />
                </Box>
              </FlexBox>
            </Page>
          )
        }}
      </UserContext.Consumer>
    );
  }
}

export default Login;