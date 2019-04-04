import React from 'react';
import { FaUserCog } from 'react-icons/fa';
import UserSettingsForm from '../../../forms/UserSettingsForm';
import Box from '../../../components/Box';
import { CurrentUser } from '../../App';
import { StyleContext } from '../../index';

class Settings extends React.Component {
  render() {
    return (
      <CurrentUser.Consumer>
        {({ userId, userName, userTheme }) => (
          <StyleContext.Consumer>
            {({ onSelectTheme, activeTheme }) => (
              <Box header={(<><FaUserCog/> Settings</>)}>
                <UserSettingsForm
                  userId={userId}
                  userName={userName}
                  userTheme={userTheme}
                  activeTheme={activeTheme}
                  onSelectTheme={onSelectTheme}
                />
              </Box>
            )}
          </StyleContext.Consumer>
        )}
      </CurrentUser.Consumer>
    );
  }
}

export default Settings;
