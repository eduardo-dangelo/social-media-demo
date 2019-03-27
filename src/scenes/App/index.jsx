import React from 'react';
import Posts from './Posts';
import NavBar from './NavBar';
import Settings from './Settings';
import { compose, graphql } from 'react-apollo';
import { currentUser } from '../../services/queries';
import { Col, Page, Row, Modal, ModalContainer, Overlay, BoxHeader, BoxContent, Box } from '../../elements/layout';
import Flip from 'react-reveal/Flip'
import { FaUser } from 'react-icons/fa'
import LoginUserForm from '../../forms/LoginUserForm'
import Tada from 'react-reveal/Tada';



class App extends React.PureComponent {
  state = {
    view: 'posts',
    showLoginModal: false,
  }

  render() {
    const { currentUser, onSelectTheme, updateRequired } = this.props;
    const { view, showLoginModal } = this.state;
    const userName = currentUser.User ? currentUser.User.name : '';
    const userTheme = currentUser.User ? currentUser.User.theme : '';

    return (
      <Page>
        {showLoginModal && (
          <ModalContainer>
            <Tada  duration={1000} >
              <Modal>
                <Box>
                  <BoxHeader>
                    <Flip top cascade>
                      <FaUser/>
                      Login
                    </Flip>
                  </BoxHeader>
                  <BoxContent>
                    <LoginUserForm updateRequired={updateRequired}/>
                  </BoxContent>
                </Box>
              </Modal>
            </Tada>
            <Overlay onClick={this.toggleLoginModal}/>
          </ModalContainer>
        )}
        <Row>
          <Col size={2} navBar>
            <NavBar
              userName={userName}
              userTheme={userTheme}
              onLoadUserTheme={onSelectTheme}
              onSelectItem={this.handleViewChange}
              onAuthRequired={this.handleAuthRequired}
              {...this.props}
            />
          </Col>
          <Col size={6}>
            {view === 'settings' && (
              <Settings updateRequired={updateRequired} {...this.props}/>
            )}
            {view === 'posts' && (
              <Posts
                userName={userName}
                onAuthRequired={this.handleAuthRequired}
                updateRequired={updateRequired}
                {...this.props}
              />
            )}
          </Col>
        </Row>
      </Page>
    );
  }

  handleViewChange = (view) => {
    this.setState({ view });
  }

  handleAuthRequired = () => {
    console.log('cal')
    this.setState({ showLoginModal: true });
  }

  toggleLoginModal = () => {
    console.log('cal2222')
    this.setState({ showLoginModal: false });
  }
}

export default compose(
  graphql(currentUser, {
    name: 'currentUser',
    options: ({ userId }) => {
      return { variables: { id: userId }}
    }
  }),
)(App);
