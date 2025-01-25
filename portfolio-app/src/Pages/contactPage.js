import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../Components/contactComponent/Contact';

export class ContactPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact | Rishabh Aggarwal</title>
        </Helmet>
        <Contact />
      </div>
    );
  }
}

export default ContactPage;