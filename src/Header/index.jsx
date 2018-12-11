import React from 'react';
import {
  Container,
  HeaderBox,
  HeaderTitle,
  HeaderButton,
  HeaderActionBar,
  TransparentButton,
} from '../elements/header';
import Flip from 'react-reveal/Flip';
import { FaLayerGroup } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';


class Header extends React.Component {
  render() {
    const { location, userId, styles } = this.props;
    return (
      <HeaderBox styles={styles}>
        <Container>
          <TransparentButton styles={styles} onClick={this.handleClick('/social-media-demo/')}>
            <HeaderTitle>
              <Flip cascade top>
                {/*<img src={logo} onLoad={this._onImageLoad}/>*/}
                {/*<FaChild/>*/}
                <FaLayerGroup/>

                Social Media
              </Flip>
            </HeaderTitle>
          </TransparentButton>
          <HeaderActionBar>
            {!userId && location.pathname === '/social-media-demo/signup' && (
              <HeaderButton styles={styles} onClick={this.handleClick('/social-media-demo/login')}>
                login
              </HeaderButton>
            )}
            {!userId && location.pathname === '/social-media-demo/login' && (
              <HeaderButton styles={styles} onClick={this.handleClick('/social-media-demo/signup')}>
                <Flip cascade top>
                  signup
                </Flip>
              </HeaderButton>
            )}
            {!userId && location.pathname === '/social-media-demo/' && (
              <HeaderButton styles={styles} onClick={this.handleClick('/social-media-demo/signup')}>
                <Flip cascade top>
                  signup
                </Flip>
              </HeaderButton>
            )}
            {userId && (
              <HeaderButton styles={styles} onClick={this.handleClick('logout')}>
                <Flip cascade top>
                  logout
                </Flip>
              </HeaderButton>
            )}
          </HeaderActionBar>
        </Container>
      </HeaderBox>
    );
  }

  handleClick = (path) => () => {
    const { history } = this.props;
    const isLoggingOut = path === 'logout';

    if (isLoggingOut) {
      localStorage.removeItem('graphcoolToken');
      window.location.reload('/social-media-demo/');
    }

    if (!isLoggingOut) {
      history.replace(path);
    }
  }
}

export default withRouter(Header);