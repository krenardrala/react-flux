import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Responsive,
  Sidebar,
} from 'semantic-ui-react'

import MainHeader from '../component/Header';
import HomepageIntro from '../component/HomepageIntro';
import HomepageGrid from '../component/HomepageGrid';
import Footer from '../component/Footer';



class HomepageLayout extends Component {
  render() {
    return (
      <Responsive>
        <MainHeader/>
        <HomepageIntro/>
        <HomepageGrid/>
        <Footer/>
      </Responsive>
    );
  }
}

export default HomepageLayout