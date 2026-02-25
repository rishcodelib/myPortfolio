import React, { Component,useEffect } from 'react';
import PropTypes from 'prop-types';

export class ResumeComponent extends Component {

  componentDidUpdate(prevProps) {
    console.log('ResumeComponent componentDidUpdate called' + JSON.stringify(this.props.resumeData));
    if (prevProps.resumeData !== this.props.resumeData) {
      console.log('ResumeComponent updated resumeData:', JSON.stringify(this.props.resumeData));
    }
  }

  formatDateRange(item) {
    if (item.duration) return item.duration;
    if (item.startDate || item.endDate) {
      const start = item.startDate ? new Date(item.startDate).getFullYear() : '';
      const end = item.endDate ? new Date(item.endDate).getFullYear() : 'Present';
      return `${start} — ${end}`;
    }
    return '';
  }


  render() {
    const raw = Array.isArray(this.props.resumeData) ? this.props.resumeData[0] : this.props.resumeData || {};
    const profile = raw.profile || {
      fullName: '',
      title: '',
      summary: '',
      location: ''
    };
    const contacts = raw.contact || [];
    const sections = raw.sections || [];

    const experienceSection = sections.find(s => s.type === 'experience' || s.key === 'experience') || null;
    const workExperience = Array.isArray(experienceSection?.items) ? experienceSection.items : [];

    const educationSection = sections.find(s => s.type === 'education' || s.key === 'education') || null;
    const education = Array.isArray(educationSection?.items) ? educationSection.items : [];

    const skillsSection = sections.find(s => s.type === 'skills' || s.key === 'skills') || null;
    const skills = Array.isArray(skillsSection?.items) ? skillsSection.items : [];

    const certSection = sections.find(s => s.type === 'certifications' || s.key === 'certifications') || null;
    const certifications = Array.isArray(certSection?.items) ? certSection.items : [];

    const emailContact = contacts.find(c => c.type === 'email')?.value || '';
    const linkedInContact = contacts.find(c => c.type === 'linkedin')?.value || '';

    return (
      <div className="container my-5">
        <header className="text-left mb-4">
          <h1>{profile.firstName || 'Name not available'}</h1>
          {profile.title && <p className="lead">{profile.title}</p>}
          <p>
            {emailContact && <a href={`mailto:${emailContact}`}>{emailContact}</a>}
            {emailContact && linkedInContact && ' | '}
            {linkedInContact && <a href={linkedInContact} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {profile.location && ` | ${profile.location}`}
          </p>
          {profile.summary && <p>{profile.summary}</p>}
        </header>

        <section className="mb-4">
          <h2 className="h4 text-uppercase">Work Experience</h2>
          {workExperience.length === 0 && <div>No work experience available.</div>}
          {workExperience.map((item) => (
            <div key={item._id || `${item.title}-${item.subtitle || ''}`} className="mb-3">
              <div className="d-flex justify-content-between">
                <div>
                  <strong>{item.title}</strong>
                  {item.subtitle && <span className="ms-2 text-muted"> — {item.subtitle}</span>}
                  {item.location && <div className="text-muted">{item.location}</div>}
                </div>
                <div className="text-muted">{this.formatDateRange(item)}</div>
              </div>
              {item.description && <p>{item.description}</p>}
              {Array.isArray(item.bullets) && (
                <ul>
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h2 className="h4 text-uppercase">Education</h2>
          {education.length === 0 && <div>No education available.</div>}
          {education.map((edu) => (
            <div key={edu._id || `${edu.degree || edu.title}-${edu.institution || ''}`} className="mb-2">
              <strong>{edu.degree || edu.title}</strong>
              <div className="text-muted">{edu.institution}{edu.year ? ` | ${edu.year}` : ''}</div>
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h2 className="h4 text-uppercase">Skills</h2>
          {skills.length === 0 && <div>No skills available.</div>}
          <ul className="list-inline">
            {skills.map((s, i) => <li key={i} className="list-inline-item badge bg-primary me-1">{typeof s === 'string' ? s : s.name || s}</li>)}
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4 text-uppercase">Certifications</h2>
          {certifications.length === 0 && <div>No certifications available.</div>}
          <ul>
            {certifications.map((c, i) => <li key={i}>{typeof c === 'string' ? c : c.name || c.title || JSON.stringify(c)}</li>)}
          </ul>
        </section>

        <section className="mt-4">
          <h5>Debug: raw resumeData</h5>
          <pre style={{ maxHeight: 300, overflow: 'auto', background: '#f8f9fa', padding: 12 }}>
            {JSON.stringify(raw, null, 2)}
          </pre>
        </section>
      </div>
    );
  }
}

ResumeComponent.propTypes = {
  resumeData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ResumeComponent;