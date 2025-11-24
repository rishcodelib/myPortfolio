import React, { Component } from 'react';
import ResumeEntity from '../../Entity/resumeEntity';

export class ResumeComponent extends Component {
  render() {
    const personalDetails = ResumeEntity.getPersonalDetails();
    const workExperience = ResumeEntity.getWorkExperience();
    const education = ResumeEntity.getEducation();
    const skills = ResumeEntity.getSkills();
    const certifications = ResumeEntity.getCertifications();

    return (
      <div className="container my-5">
        {/* Header Section */}
        <header className="text-left mb-4">
          <h1>{personalDetails.firstName} {personalDetails.lastName}</h1>
          <p className="lead">{personalDetails.title}</p>
          <p>
            <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a> | {personalDetails.phone} | {personalDetails.location} |  <a href={`https://${personalDetails.linkedIn}`} target="_blank" rel="noopener noreferrer">{personalDetails.linkedIn}</a>
          </p>
        </header>

        {/* Work Experience Section */}
        <section className="mb-4">
          <h2 className="h4 text-uppercase">Work Experience</h2>
          {workExperience.map((job, index) => (
            <div key={index} className="mb-3">
              <h3 className="h5 d-flex justify-content-between">
                <span>{job.title} | {job.company} | {job.location}</span>
                <span className="text-muted">{job.duration}</span> {/* Keep duration on the same line */}
              </h3>
              <ul>
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-4">
          <h2 className="h4 text-uppercase">Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <p className="mb-1">
                <strong>{edu.degree}</strong>
              </p>
              <p>{edu.institution} | {edu.year}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="mb-4">
          <h2 className="h4 text-uppercase">Skills</h2>
          <ul className="list-inline">
            {skills.map((skill, index) => (
              <li key={index} className="list-inline-item badge bg-primary me-1">{skill}</li>
            ))}
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="mb-4">
          <h2 className="h4 text-uppercase">Certifications</h2>
          <ul>
            {certifications.map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <footer className="text-center mt-5">
          <p>
            Connect with me on <a href={`https://${personalDetails.linkedIn}`} target="_blank" rel="noopener noreferrer">LinkedIn</a> or visit my website: <a href={`https://${personalDetails.website}`} target="_blank" rel="noopener noreferrer">{personalDetails.website}</a>.
          </p>
        </footer>
      </div>
    );
  }
}

export default ResumeComponent;