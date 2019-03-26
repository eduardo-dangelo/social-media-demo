import React from 'react';
import Posts from './Posts';
import Login from '../Login';
import NavBar from './NavBar';
import Settings from './Settings';
import { compose, graphql } from 'react-apollo';
import { currentUser } from '../../services/queries';
import { Col, Page, Row } from '../../elements/layout';


class App extends React.PureComponent {
  state = {
    view: 'posts'
  }

  render() {
    const {
      theme,
      styles,
      userId,
      currentUser,
      updateRequired,
      onSelectTheme,
    } = this.props;
    const { view } = this.state;

    // if (!userId) {
    //   return <Login userId={userId} updateRequired={updateRequired}/>;
    // }

    const userName = currentUser.User ? currentUser.User.name : '';
    const userTheme = currentUser.User ? currentUser.User.theme : '';

    // if (!userName) {
    //   return null;
    // }

    return (
      <Page>
        <Row>
          <Col size={2} navBar>
            <NavBar
              theme={theme}
              styles={styles}
              userId={userId}
              userName={userName}
              userTheme={userTheme}
              onLoadUserTheme={onSelectTheme}
              onSelectItem={this.handleViewChange}
              onAuthRequired={this.handleAuthRequired}
            />
          </Col>
          <Col size={6}>
            {view === 'settings' && (
              <Settings
                userId={userId}
                theme={theme}
                currentUser={currentUser}
                onSelectTheme={onSelectTheme}
                onAuthRequired={this.handleAuthRequired}
              />
            )}
            {view === 'posts' && (
              <Posts
                userName={userName}
                userId={userId}
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
    // some hot stuff here...
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
