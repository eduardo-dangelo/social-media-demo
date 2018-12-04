import React from 'react';
import { Box, BoxContent, BoxHeader } from '../../../elements/layout';
import { FaUser, FaEnvelope, FaUserCog } from 'react-icons/fa';
import styled from 'styled-components';
import { variables } from '../../../config'

export const UList = styled.div`
  margin: 0;
  padding: ${variables.spaceSmall} 0;
`;

export const LItem = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;
  transition: ${variables.transition};
  padding: ${variables.spaceSmall} ${variables.space};
  background: ${({ active }) => active ? variables.link.active.bg : 'transparent'};
  color: ${variables.link.color};
  
  svg {
    margin-right: ${variables.spaceSmall};
  }
  
  &:hover {
    text-shadow: ${variables.boxShadow};
    color: ${variables.link.hover.color};
  }
`;

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
      <Box>
        <BoxHeader>
          <FaUser/>
          Welcome Ud
        </BoxHeader>
        <UList>
          {items.map((item) => {
            return (
              <LItem
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