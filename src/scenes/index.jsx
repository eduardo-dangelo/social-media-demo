import React from 'react';
import App from './App';
import Login from './Login';
import Shell from '../Shell';
import { style } from '../config';
import CreateUser from './CreateUser';
import { compose, graphql } from 'react-apollo';
import { loggedInUser } from '../services/queries';
import { Route, Switch } from 'react-router-dom';

export const UserContext = React.createContext({});
export const StyleContext = React.createContext({});

class Scenes extends React.Component {
  state = {
    theme: 'light'
  }

  render() {
    const { user } = this.props;
    const { theme } = this.state;
    let userId = null;

    if (user.loggedInUser && user.loggedInUser.id) {
      userId = user.loggedInUser.id;
    }

    const styleContextValue = {
      theme: style.themes[theme],
      variables: style.variables
    }

    const userContextValue = {
      userId: user.loggedInUser && user.loggedInUser.id,
      updateRequired: this._handleRefetch,
    }

    return (
      <UserContext.Provider value={userContextValue}>
        <StyleContext.Provider value={styleContextValue}>
          <Shell>
            <Switch>
              <Route exact path='/social-media-demo/'>
                <App
                  userId={userId}
                  theme={theme}
                  updateRequired={this._handleRefetch}
                  onSelectTheme={this.handleThemeChange}
                />
              </Route>
              <Route exact path='/social-media-demo/login'>
                <Login/>
              </Route>
              <Route path='/social-media-demo/signup'>
                <CreateUser/>
              </Route>
            </Switch>
          </Shell>
        </StyleContext.Provider>
      </UserContext.Provider>
    );
  }

  _handleRefetch = () => {
    const { user } = this.props;
    user.refetch()
  }

  handleThemeChange = (theme) => {
    this.setState({ theme });
  }
}

export default compose(
  graphql(loggedInUser, {
    name: 'user',
    options: { fetchPolicy: 'network-only' }
  }),
)(Scenes);
