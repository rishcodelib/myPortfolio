import React, { Component } from 'react'

import ResumeComponent from "../Components/resumeComponent/resumeComponent.js";
import { Helmet } from 'react-helmet-async';

export class resumePage extends Component {
  render() {
    const handleResumeClick = () => {
      window.open("/resume.pdf", "_blank");
    };
    return (
      <>
        <Helmet>
          <title>Resume Aggarwal | Rishabh Aggarwal</title>
        </Helmet>

        {/* Container for the header */}
        <div className="container my-3">
          <div className="d-flex justify-content-between align-items-center">
            {/* Centered Text */}
            <h5 className="text-center w-70 mb-0  fw-light">Candidate Resume</h5>

            {/* Download Button */}
            <button
              type="button"
              className="btn btn-secondary ms-auto"
              onClick={handleResumeClick}
            >
              Download Resume
            </button>
          </div>
        </div>
        <ResumeComponent />
        <div className='container'>
          <div className="d-flex justify-content-end my-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleResumeClick}
            >
              Download Resume
            </button>
          </div>
        </div>

      </>
    )
  }
}

export default resumePage

