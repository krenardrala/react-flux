import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Segment,
} from 'semantic-ui-react'

import Home from '../container/Home';
import Weather from '../container/Weather';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

class MainHeader extends Component {
  state = {};
  render() {
    const { fixed } = this.state
    return (
      <Router>
        <div>
          <Segment
            inverted
            textAlign='center'
            style={{padding: '1em 0em',  background: '#0a0d3b' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/weather">Weather</Link>
                </Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
          <Route exact path="/" component={Home}/>
          <Route path="/weather" component={Weather}/>
        </div>
      </Router>
    );
  }
}

export default MainHeader