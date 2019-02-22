import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Home from './container/Home';
import Weather from './container/Weather';

import { Route, BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/weather" component={Weather}/>
    </div>
  </Router>,
  document.getElementById('root'));

