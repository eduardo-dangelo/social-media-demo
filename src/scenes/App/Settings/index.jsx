import React from 'react';
import Flip from 'react-reveal/Flip';
import { FaUserCog } from 'react-icons/fa';
import UserSettingsForm from '../../../forms/UserSettingsForm';
import { Box, BoxContent, BoxHeader } from '../../../elements/layout';

class Settings extends React.Component {
  render() {
    const { theme, onSelectTheme, currentUser } = this.props;
    return (
      <Box>
        <BoxHeader>
          <Flip top cascade>
            <FaUserCog/>
            Settings
          </Flip>
        </BoxHeader>
        <BoxContent>
          <UserSettingsForm
            theme={theme}
            onSelectTheme={onSelectTheme}
            currentUser={currentUser}
          />
        </BoxContent>
      </Box>
    );
  }
}

export default Settings;
