import React, { Component } from 'react'

import { Helmet } from 'react-helmet-async';
import ResumeEntity from '../Entity/resumeEntity';

export class DummyPage extends Component {
  render() {
    const personalDetails = ResumeEntity.getPersonalDetails();
    const educationDetails = ResumeEntity.getEducationDetails();
    const professionalDetails = ResumeEntity.getProfessionalDetails();
    const contactDetails = ResumeEntity.getContactDetails();

    return (
      <div>
        <Helmet>
          <title>Dummy | Rishabh Aggarwal</title>
        </Helmet>
        <h1>Resume Details</h1>
        <h2>Personal Details</h2>
        <p>{personalDetails.firstName} {personalDetails.lastName}</p>
        <h2>Education Details</h2>
        <p>{educationDetails.firstName} {educationDetails.lastName}</p>
        <h2>Professional Details</h2>
        <p>{professionalDetails.firstName} {professionalDetails.lastName}</p>
        <h2>Contact Details</h2>
        <p>Email: {contactDetails.emailID}</p>
        <p>Contact: {contactDetails.contact}</p>
        <p>Address: {contactDetails.address}</p>
      </div>
    );
  }
}

export default DummyPage

