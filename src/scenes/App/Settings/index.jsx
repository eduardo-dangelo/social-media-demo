import React from 'react';
import { Box, BoxContent, BoxHeader } from '../../../elements/layout'
import { FaUserCog } from 'react-icons/fa'
import UserSettingsForm from '../../../forms/UserSettingsForm';
import Flip from 'react-reveal/Flip'

class Settings extends React.Component {
  render() {
    const { theme, onSelectTheme } = this.props;
    return (
      <Box>
        <BoxHeader>
          <Flip top cascade>
            <FaUserCog/>
            Settings
          </Flip>
        </BoxHeader>
        <BoxContent>
          <UserSettingsForm theme={theme} onSelectTheme={onSelectTheme}/>
        </BoxContent>
      </Box>
    )
  }
}

export default Settings