import React from 'react';
import logo from './graphql_Logo_color_xxs.png';
import { withRouter } from 'react-router-dom';
import {
  Container,
  HeaderActionBar,
  HeaderBox,
  HeaderButton,
  HeaderTitle,
  TransparentButton,
} from '../elements/header';
import Flip from 'react-reveal/Flip';


class Header extends React.Component {
  state = {
    show: false,
  };

  render() {
    const { location, userId, styles } = this.props;
    const { show } = this.state;
    return (
      <HeaderBox styles={styles}>
        <Container>
          <TransparentButton styles={styles} onClick={this._handleClick('/social-media-demo/')}>
            <HeaderTitle>
              <Flip cascade top when={show}>
                <img src={logo} onLoad={this._onImageLoad}/>
                Social Media
              </Flip>
            </HeaderTitle>
          </TransparentButton>
          <HeaderActionBar>
            {!userId && location.pathname === '/social-media-demo/signup' && (
              <HeaderButton styles={styles} onClick={this._handleClick('/social-media-demo/login')}>
                login
              </HeaderButton>
            )}
            {!userId && location.pathname === '/social-media-demo/login' && (
              <HeaderButton styles={styles} onClick={this._handleClick('/social-media-demo/signup')}>
                <Flip cascade top when={show}>
                  signup
                </Flip>
              </HeaderButton>
            )}
            {!userId && location.pathname === '/social-media-demo/' && (
              <HeaderButton styles={styles} onClick={this._handleClick('/social-media-demo/signup')}>
                <Flip cascade top when={show}>
                  signup
                </Flip>
              </HeaderButton>
            )}
            {userId && (
              <HeaderButton styles={styles} onClick={this._handleClick('logout')}>
                <Flip cascade top when={show}>
                  logout
                </Flip>
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
      window.location.reload('/social-media-demo');
    }

    if (!isLoggingOut) {
      history.replace(path);
    }
  }

  _onImageLoad = () => {
    this.setState({ show: true })
  }
}

export default withRouter(Header);