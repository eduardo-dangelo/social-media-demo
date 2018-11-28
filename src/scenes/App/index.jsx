import React from 'react';
import Login from '../Login';

class App extends React.Component {
  render() {
    const { userId, updateRequired } = this.props;

    if (!userId) {
      return <Login userId={userId} updateRequired={updateRequired}/>
    }

    return (
      <div>
        <h2>Welcome back Ud!</h2>
      </div>
    )
  }
}

export default App;