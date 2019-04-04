import React from 'react';
import { StyleContext } from '../../scenes'
import { NavItemWrapper } from '../../elements/layout'

class NavItem extends React.Component {
  render() {
    const { children, active, onSelect } = this.props;
    return (
      <StyleContext.Consumer>
        {({ activeTheme }) => (
          <NavItemWrapper onClick={onSelect} theme={activeTheme} active={active}>
            {children}
          </NavItemWrapper>
        )}
      </StyleContext.Consumer>
    );
  }
}

export default NavItem;
