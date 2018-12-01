import React from 'react';
import Login from '../Login';
import { Col, Page, Row } from '../../elements/layout'
import NavBar from './NavBar';
import Posts from './Posts';
import Settings from './Settings';


class App extends React.Component {
  state = {
    view: 'posts'
  }

  render() {
    const { userId, updateRequired } = this.props;
    const { view } = this.state;

    if (!userId) {
      return <Login userId={userId} updateRequired={updateRequired}/>;
    }

    return (
      <Page>
        <Row>
          <Col size={2}>
            <NavBar onSelectItem={this.handleViewChange}/>
          </Col>
          <Col size={6}>
            {view === 'posts' && <Posts/>}
            {view === 'settings' && <Settings/>}
          </Col>
        </Row>
      </Page>
    );
  }

  handleViewChange = (view) => {
    this.setState({ view });
  }
}

export default App;