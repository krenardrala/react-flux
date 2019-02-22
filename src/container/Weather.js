import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Responsive,
  Sidebar,
} from 'semantic-ui-react';

import MainHeader from '../component/Header';
import Footer from '../component/Footer';


class Weather extends Component {
  render() {
    return(
      <Responsive>
        <MainHeader/>
        <p>Weather</p>
        <Footer/>
      </Responsive>
    );
  }
}

export default Weather