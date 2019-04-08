import React from 'react';
import { FaEnvelope, FaUserCog } from 'react-icons/fa';
import { CurrentUser } from '../index'
import Box from '../../../components/Box'
import NavItem from '../../../components/NavItem'
import NavList from '../../../components/NavList'

class NavBar extends React.Component {
  state = {
    activeItem: 'posts',
  }

  render() {
    const { activeItem } = this.state;
    const items = [
      { name: 'Posts', key: 'posts', icon: (<FaEnvelope/>)},
      { name: 'Settings', key: 'settings', icon: (<FaUserCog/>)},
    ];

    return (
      <CurrentUser.Consumer>
        {({ userName, userId, onAuthRequired, onSelectView }) => (
          <Box size={500} header={`Welcome ${userName}`}>
            <NavList>
              {items.map((view) => {
                return (
                  <NavItem
                    key={view.key}
                    active={activeItem === view.key}
                    onSelect={userId ? this.handleClick(view.key, onSelectView) : onAuthRequired}
                  >
                    {view.icon}
                    {view.name}
                  </NavItem>
                );
              })}
            </NavList>
          </Box>
        )}
      </CurrentUser.Consumer>
    );
  }

  handleClick = (item, onSelectView) => () => {
    this.setState({ activeItem: item });
    onSelectView(item);
  }
}

export default NavBar;
