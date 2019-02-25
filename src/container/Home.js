import React, { Component } from 'react'
import {
  Responsive
} from 'semantic-ui-react'

import HomepageIntro from '../component/HomepageIntro';
import HomepageGrid from '../component/HomepageGrid';
import Footer from '../component/Footer';

class HomepageLayout extends Component {
  render() {
    return (
      <Responsive>
        <HomepageIntro/>
        <HomepageGrid/>
        <Footer/>
      </Responsive>
    );
  }
}

export default HomepageLayout