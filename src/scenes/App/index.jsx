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
    const { userId, updateRequired, onSelectTheme, styles, theme } = this.props;
    const { view } = this.state;

    if (!userId) {
      return <Login userId={userId} updateRequired={updateRequired}/>;
    }

    return (
      <Page>
        <Row>
          <Col size={2}>
            <NavBar styles={styles} theme={theme} onSelectItem={this.handleViewChange}/>
          </Col>
          <Col size={6}>
            {view === 'posts' && <Posts/>}
            {view === 'settings' && <Settings onSelectTheme={onSelectTheme}/>}
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