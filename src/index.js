import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Header from './component/Header';
import Weather from './container/Weather';

import { Route, BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Header/>,
  document.getElementById('root'));

