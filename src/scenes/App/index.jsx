import React from 'react';
import Posts from './Posts';
import NavBar from './NavBar';
import Settings from './Settings';
import { compose, graphql } from 'react-apollo';
import { currentUser } from '../../services/queries';
import { Col, Page, Row } from '../../elements/layout';
import { FaUser } from 'react-icons/fa'
import LoginUserForm from '../../forms/LoginUserForm'
import Modal from '../../components/Modal/Modal'
import { LoadUserTheme } from '../../helpers/LoadUserTheme';

export const CurrentUser = React.createContext({});

class App extends React.PureComponent {
  state = {
    view: 'posts',
    showLoginModal: false,
  }

  render() {
    const { currentUser } = this.props;
    const { view, showLoginModal } = this.state;

    const viewTypes = {
      POSTS: 'posts',
      SETTINGS: 'settings'
    }

    const showPosts = view === viewTypes.POSTS;
    const showSettings = view === viewTypes.SETTINGS;

    const contextValues = {
      userName: currentUser.User ? currentUser.User.name : '',
      userTheme: currentUser.User ? currentUser.User.theme : 'light',
      userId: currentUser.User ? currentUser.User.id : null,
      onSelectView: this.handleViewChange,
      onAuthRequired: this.handleAuthRequired,
      currentView: view,
    }

    return (
      <CurrentUser.Provider value={contextValues}>
        <LoadUserTheme/>
        <Page>
          <Modal
            size={300}
            show={showLoginModal}
            onClose={this.toggleLoginModal}
            header={(<><FaUser/> Login</>)}
          >
            <LoginUserForm updateRequired={this.handleUpdateRequired}/>
          </Modal>
          <Row>
            <Col size={2} navBar>
              <NavBar/>
            </Col>
            <Col size={6}>
              {showPosts && <Posts/>}
              {showSettings && <Settings />}
            </Col>
          </Row>
        </Page>
      </CurrentUser.Provider>
    );
  }

  handleViewChange = (view) => {
    this.setState({ view });
  }

  handleAuthRequired = () => {
    this.setState({ showLoginModal: true });
  }

  toggleLoginModal = () => {
    this.setState({ showLoginModal: false });
  }

  handleUpdateRequired = () => {
    const { updateRequired } = this.props;
    updateRequired();
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
