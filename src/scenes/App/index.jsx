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
    const userId = currentUser.User ? currentUser.User.id : '';

    return (
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
                userId={userId}
                userName={userName}
                onAuthRequired={this.handleAuthRequired}
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
