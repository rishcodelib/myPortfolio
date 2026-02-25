import React, { Component, useEffect } from 'react'

import ResumeComponent from "../Components/resumeComponent/resumeComponent.js";
import { Helmet } from 'react-helmet-async';
import resumeService from '../service/resumeService.js';



export class resumePage extends Component {
  // initial state to avoid "this.state is null" runtime errors
  state = {
    fetchedData: null,
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.fetchResumeData();
  }

  fetchResumeData() {
    this.setState({ loading: true, error: null });
    resumeService.get()
      .then(data => {
        this.setState({ fetchedData: data });
      })
      .catch(err => {
        console.error("Error fetching resume:", err);
        this.setState({ error: "Failed to load resume data." });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {

    const handleResumeClick = () => {
      window.open("/resume.pdf", "_blank");
    };


    const { loading, fetchedData, error } = this.state;


    if (loading) return <div className="container my-3">Loading resume...</div>;
    if (error) return <div className="container my-3 text-danger">Error loading resume: {error}</div>;
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
            <p> Status: {loading}</p>
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
        {/* <ResumeComponent resumeData={fetchedData} /> */}
        {/* <ResumeFormComponent tagName="Resume Form Tag" /> */}
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

