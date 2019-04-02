import React from 'react';
import Flip from 'react-reveal/Flip';
import { FaUserCog } from 'react-icons/fa';
import UserSettingsForm from '../../../forms/UserSettingsForm';
import { BoxContainer, BoxContent, BoxHeader } from '../../../elements/layout';

class Settings extends React.Component {
  render() {
    return (
      <BoxContainer>
        <BoxHeader>
          <Flip top cascade>
            <FaUserCog/>
            Settings
          </Flip>
        </BoxHeader>
        <BoxContent>
          <UserSettingsForm {...this.props}/>
        </BoxContent>
      </BoxContainer>
    );
  }
}

export default Settings;
