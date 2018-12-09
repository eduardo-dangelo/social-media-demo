import React from 'react';
import { Box, BoxHeader, LItem, UList } from '../../../elements/layout';
import { FaUser, FaEnvelope, FaUserCog } from 'react-icons/fa';
import Flip from 'react-reveal/Flip'

class NavBar extends React.Component {
  state = {
    activeItem: 'posts',
  }

  componentWillMount() {
    const { userTheme, onLoadUserTheme } = this.props;

    if (userTheme !== '') {
      onLoadUserTheme(userTheme);
    }
  }


  render() {
    const { theme, userName } = this.props;
    const { activeItem } = this.state;
    const items = [
      { name: 'Posts', key: 'posts', icon: (<FaEnvelope/>)},
      { name: 'Settings', key: 'settings', icon: (<FaUserCog/>)},
    ];

    return (
      <Box>
        <BoxHeader>
          <FaUser/>
          <Flip top cascade>
            {`Welcome ${userName}`}
          </Flip>
        </BoxHeader>
        <UList>
          {items.map((item) => {
            return (
              <LItem
                key={item.key}
                theme={theme}
                active={activeItem === item.key}
                onClick={this.handleClick(item.key)}
              >
                {item.icon}
                {item.name}
              </LItem>
            );
          })}
        </UList>
      </Box>
    )
  }

  handleClick = (item) => () => {
    const { onSelectItem } = this.props;
    this.setState({ activeItem: item });
    onSelectItem(item);
  }
}

export default NavBar