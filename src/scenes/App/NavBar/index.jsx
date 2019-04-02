import React from 'react';
import Flip from 'react-reveal/Flip';
import { FaUser, FaEnvelope, FaUserCog } from 'react-icons/fa';
import { BoxContainer, BoxHeader, BoxHeaderContent, LItem, UList } from '../../../elements/layout';

class NavBar extends React.Component {
  state = {
    activeItem: 'posts',
  }

  componentWillMount() {
    const { userTheme, onLoadUserTheme } = this.props;

    if (userTheme) {
      onLoadUserTheme(userTheme);
    }
  }


  render() {
    const { theme, userName, userId } = this.props;
    const { activeItem } = this.state;
    const items = [
      { name: 'Posts', key: 'posts', icon: (<FaEnvelope/>)},
      { name: 'Settings', key: 'settings', icon: (<FaUserCog/>)},
    ];

    return (
      <BoxContainer>
        <BoxHeader>
          <FaUser/>
          <BoxHeaderContent>
            <Flip top cascade>
              {`Welcome ${userName}`}
            </Flip>
          </BoxHeaderContent>
        </BoxHeader>
        <UList>
          {items.map((item) => {
            return (
              <LItem
                key={item.key}
                theme={theme}
                active={activeItem === item.key}
                onClick={userId ? this.handleClick(item.key) : this.handleAuthClick}
              >
                {item.icon}
                {item.name}
              </LItem>
            );
          })}
        </UList>
      </BoxContainer>
    );
  }

  handleClick = (item) => () => {
    const { onSelectItem } = this.props;
    this.setState({ activeItem: item });
    onSelectItem(item);
  }

  handleAuthClick = () => {
    const { onAuthRequired } = this.props;
    onAuthRequired();
  }
}

export default NavBar;
