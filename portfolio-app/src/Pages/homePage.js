import React, { Component } from 'react'
import About from '../Components/aboutComponent/about'
import Divider from '../Components/divider/divider.js'
import Contact from '../Components/contactComponent/Contact.js'
import HeroImage from '../Components/heroImageComponent/heroImage.js'
import { Helmet } from 'react-helmet-async';

export class homePage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home | Rishabh Aggarwal</title>
        </Helmet>
        <HeroImage />
        <About />
        <Divider />
        <Contact />

      </>
    )
  }
}

export default homePage

