import React, { Component } from 'react';
import Shell from '../Shell';
import { Route } from 'react-router-dom';
import Login from './Login';
import App from './App';
import CreatePost from '../components/CreatePost';
import CreateUser from './CreateUser';
import { compose, graphql } from 'react-apollo'
import { loggedInUser } from '../services/queries'

class Scenes extends Component {
  render() {
    const { user } = this.props
    let userId = null;

    if (user.loggedInUser && user.loggedInUser.id) {
      userId = user.loggedInUser.id;
    }

    return (
      <Shell userId={userId}>
        <Route exact path='/social-media-demo/' render={() => (
            <App userId={userId} updateRequired={this._handleRefetch}/>
          )}
        />
        <Route
          exact path='/social-media-demo/login' render={() => (
            <Login userId={userId} updateRequired={this._handleRefetch}/>
          )}
        />
        <Route path='/social-media-demo/create' render={() => <CreatePost/>}/>
        <Route path='/social-media-demo/signup' render={() => <CreateUser/>}/>
      </Shell>
    );
  }

  _handleRefetch = () => {
    const { user } = this.props;
    user.refetch()
  }
}

export default compose(
  graphql(loggedInUser, {
    name: 'user',
    options: { fetchPolicy: 'network-only' }
  }),
)(Scenes);