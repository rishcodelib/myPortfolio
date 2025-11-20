import React, { Component } from 'react'
import About from '../Components/aboutComponent/about'
import Divider from '../Components/divider/divider.js'
import Contact from '../Components/contactComponent/contact';
import HeroImage from '../Components/heroImageComponent/heroImage.js'
import { Helmet } from 'react-helmet-async';

export class resumePage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Resume | Rishabh Aggarwal</title>
        </Helmet>

        
        {/* <Contact /> */}

      </>
    )
  }
}

export default resumePage

