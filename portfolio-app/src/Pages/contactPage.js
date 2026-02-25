import React, { Component } from 'react';
import ProjectForm from '../Components/projectFormComponent/projectFormComponent';
import { Helmet } from 'react-helmet-async';

import Contact from '../Components/contactComponent/contact';

export class ContactPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact | Rishabh Aggarwal</title>
        </Helmet>
        {/* <ProjectForm /> */}
        <Contact />
      </div>
    );
  }
}

export default ContactPage;