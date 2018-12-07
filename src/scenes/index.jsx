import React, { Component } from 'react';
import Shell from '../Shell';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import App from './App';
import CreatePost from '../components/CreatePost';
import CreateUser from './CreateUser';
import { compose, graphql } from 'react-apollo'
import { loggedInUser } from '../services/queries'
import { style } from '../config'

class Scenes extends Component {
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

    const styles = {
      theme: style.themes[theme]
    }

    return (
      <Shell userId={userId} theme={theme} styles={styles}>
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
            <Login userId={userId} updateRequired={this._handleRefetch}/>
          </Route>
          <Route path='/social-media-demo/create'>
            <CreatePost/>
          </Route>
          <Route path='/social-media-demo/signup'>
            <CreateUser/>
          </Route>
        </Switch>
      </Shell>
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