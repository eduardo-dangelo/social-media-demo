import React from 'react';
import { FaUser } from 'react-icons/fa';
import CreateUserForm from '../../forms/CreateUserForm';
import { Page, FlexBox } from '../../elements/layout';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../index';
import Box from '../../components/Box';

class CreateUser extends React.PureComponent {
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
                    <><FaUser/> Sign Up</>
                  )}
                >
                  <CreateUserForm
                    updateRequired={updateRequired}
                  />
                </Box>
              </FlexBox>
            </Page>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default CreateUser;