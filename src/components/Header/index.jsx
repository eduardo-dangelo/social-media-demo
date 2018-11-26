import React from 'react';
import logo from './graphql_logo.png';
import { withRouter } from 'react-router-dom';
import {
  Container,
  HeaderActionBar,
  HeaderBox,
  HeaderButton,
  HeaderTitle
} from '../../elements/header';


class Header extends React.Component {
  render() {
    const { location, userId } = this.props;
    return (
      <HeaderBox>
        <Container>
          <HeaderTitle>
            <img src={logo} />
            Social Media Demo
          </HeaderTitle>
          <HeaderActionBar>
            {!userId && location.pathname === '/sign-up' && (
              <HeaderButton onClick={this._handleClick('/login')}>
                Login
              </HeaderButton>
            )}
            {!userId && location.pathname === '/login' && (
              <HeaderButton onClick={this._handleClick('/sign-up')}>
                Signup
              </HeaderButton>
            )}
            {userId && (
              <HeaderButton onClick={this._handleClick('logout')}>
                Logout
              </HeaderButton>
            )}
          </HeaderActionBar>
        </Container>
      </HeaderBox>
    );
  }

  _handleClick = (path) => () => {
    const { history } = this.props;
    const isLoggingOut = path === 'logout';

    if (isLoggingOut) {
      localStorage.removeItem('graphcoolToken');
      window.location.reload();
    }

    if (!isLoggingOut) {
      history.replace(path);
    }
  }
}

export default withRouter(Header);