import React from 'react';
import { NavListWrapper } from '../../elements/layout';

class NavList extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <NavListWrapper>
        {children}
      </NavListWrapper>
    )
  }
}

export default NavList;
