import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ResumeFormComponent() {

  const addExperience = () => {
    alert("Add Experience Clicked");
  }

  const addEducation = () => {
    alert("Add Education Clicked");
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior



    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const fullName = firstName + " " + lastName;
    const email = formData.get('email');
    const title = formData.get('title');
    const contact = formData.get('contact');
    const location = formData.get('location');
    const summary = formData.get('summary');
    //Experience Details
    const experienceRole = formData.get('role');
    const experienceCompanyName = formData.get('companyName');
    const experienceStartDate = formData.get('startDate');
    const experienceEndDate = formData.get('endDate');
    const experienceProfessionalSummary = formData.get('professionalSummary');
    const experienceBulletPoints = formData.get('bulletPoints');
    // Education Details
    const educationDegree = formData.get('degree');
    const educationInstitute = formData.get('institute');
    const educationStartDate = formData.get('eduStartDate');
    const educationEndDate = formData.get('eduEndDate');
    const educationProfessionalSummary = formData.get('eduProfessionalSummary');
    const educationBulletPoints = formData.get('eduBulletPoints');
    // Technical Skills
    const techSkillDegree = formData.get('techDegree');
    const techSkillInstitute = formData.get('techInstitute');
    const techSkillStartDate = formData.get('techStartDate');
    const techSkillEndDate = formData.get('techEndDate');
    const techSkillProfessionalSummary = formData.get('techProfessionalSummary');
    const techSkillBulletPoints = formData.get('techBulletPoints');

    // For demonstration, we'll just log the values to the console   


    console.log('Form submitted:', {
      fullName, email, title, contact, location, summary,
      experienceRole, experienceCompanyName, experienceStartDate, experienceEndDate, experienceProfessionalSummary, experienceBulletPoints,
      educationDegree, educationInstitute, educationStartDate, educationEndDate, educationProfessionalSummary, educationBulletPoints,
      techSkillDegree, techSkillInstitute, techSkillStartDate, techSkillEndDate, techSkillProfessionalSummary, techSkillBulletPoints
    });


    // You can now send this data to an API or process it further
  };

  return (

    <div className="container">
      <h4 className="resume-form-heading">Resume Form</h4>
      <hr></hr>
      <h3> Personal Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-12">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name" />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="Eg. Software Engineer" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="contact">Contact</label>
            <input type="text" className="form-control" id="contact" name="contact" placeholder="Eg. Mobile Number" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" id="location" name="location" placeholder="Eg. City, Country" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="summary"> Professional Summary</label>
            <input type="text" className="form-control" id="summary" name="summary" placeholder="Eg. Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
          </div>

        </div>
        <hr></hr>
        <h3> Experience </h3>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="title">Title / Role</label>
            <input type="text" className="form-control" id="role" name="role" placeholder="Eg. Software Engineer" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="contact">Company Name</label>
            <input type="text" className="form-control" id="companyName" name="companyName" placeholder="Eg. Company Name" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="location">Start Date</label>
            <input type="text" className="form-control" id="startDate" name="startDate" placeholder="Eg. Date of Joining DD/MM/YYYY" />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="location">End Date</label>
            <input type="text" className="form-control" id="endDate" name="endDate" placeholder="Eg. Last Date in DD/MM/YYYY" />
          </div>

          <div className="form-group col-md-4 d-flex align-items-end">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
              <label className="form-check-label" htmlFor="invalidCheck">
                Presently Working
              </label>
            </div>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="summary"> Professional Summary</label>
            <input type="text" className="form-control" id="summary" name="summary" placeholder="Eg. Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="bulletPoints"> Bullet points</label>
            <input type="text" className="form-control" id="bulletPoints" name="bulletPoints" placeholder="Eg. Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
        </div>
        <div className="row ">
          <div className="form-group offset-md-10 col-md-2">
            <button type="button" className="btn btn-success" onClick={addExperience} > + Experience</button>
          </div>
        </div>
        <hr></hr>
        <h4>Education Details</h4>

        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="title">Degree </label>
            <input type="text" className="form-control" id="role" name="role" placeholder="Eg. Bachelors in Technology" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="contact">Institute / University </label>
            <input type="text" className="form-control" id="companyName" name="companyName" placeholder="Eg. University Name" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="location">Start Date</label>
            <input type="text" className="form-control" id="startDate" name="startDate" placeholder="Eg. Date of Joining DD/MM/YYYY" />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="location">End Date</label>
            <input type="text" className="form-control" id="endDate" name="endDate" placeholder="Eg. Last Date in DD/MM/YYYY" />
          </div>

          <div className="form-group col-md-4 d-flex align-items-end">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
              <label className="form-check-label" htmlFor="invalidCheck">
                Presently Studying
              </label>
            </div>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="summary"> Professional Summary</label>
            <input type="text" className="form-control" id="professionalSummary" name="professionalSummary" placeholder="Eg. Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="summary"> Bullet points</label>
            <input type="text" className="form-control" id="bulletPoints" name="bulletPoints" placeholder="Eg. Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
          </div>
        </div>
        <div className="row ">
          <div className="form-group offset-md-10 col-md-2">
            <button type="button" id="addEducation" className="btn btn-success" onClick={addEducation} >(+) Education</button>
          </div>
        </div>

        <hr></hr>
        <h3>Technical Skills</h3>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="title">Degree </label>
            <input type="text" className="form-control" id="degree" name="degree" placeholder="Eg. Bachelors in Technology" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="contact">Institute / University </label>
            <input type="text" className="form-control" id="companyName" name="companyName" placeholder="Eg. University Name" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="location">Start Date</label>
            <input type="text" className="form-control" id="startDate" name="startDate" placeholder="Eg. Date of Joining DD/MM/YYYY" />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="location">End Date</label>
            <input type="text" className="form-control" id="endDate" name="endDate" placeholder="Eg. Last Date in DD/MM/YYYY" />
          </div>

          <div className="form-group col-md-4 d-flex align-items-end">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
              <label className="form-check-label" htmlFor="invalidCheck">
                Presently Studying
              </label>
            </div>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="summary"> Professional Summary</label>
            <input type="text" className="form-control" id="professionalSummary" name="professionalSummary" placeholder="Eg. Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="summary"> Bullet points</label>
            <input type="text" className="form-control" id="bulletPoints" name="bulletPoints" placeholder="Eg. Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="summary"> Skill</label>
            <select className="custom-select " multiple >
              <option value="">Skills</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Save Resume</button>
      </form>
    </div>

  );
}

export default ResumeFormComponent;