import React, { Component } from "react";
import './projectItem.css';

export class ProjectItem extends Component {
  render() {
    let { projectName, alias, description, liveUrl, gitUrl, demoUrl, imgSrc, tag, status } = this.props;

    return (

      <div className="card border-0 bg-proj-carousel">
        <img className="card-img-top" src={imgSrc} alt="projectImage" />
        <div className="card-body">
          <h5 className="card-title">{projectName} <span className="text-secondary">
            {alias}
          </span></h5>
          <p className="card-text">{description} </p>
          <p className="card-text"> Status:  {status} </p>
          <span >
            <p href=" #" className="project-tag btn-tag btn ">{tag}</p>
          </span>
        </div>
        <hr className="divider" />
        <div className="row">
          {liveUrl && (
            <div className="col-md-4 text-start">
              <a href={liveUrl} className="btn btn-primary process-btn btn-live" target="_blank" rel="noopener noreferrer">LIVE URL</a>
            </div>
          )}
          {demoUrl && (
            <div className="col-md-4 text-center">
              <a href={demoUrl} className="btn btn-secondary process-btn btn-demo" target="_blank" rel="noopener noreferrer">DEMO</a>
            </div>
          )}
          {gitUrl && (
            <div className="col-md-4 text-end">
              <a href={gitUrl} className="btn btn-warning process-btn btn-git" target="_blank" rel="noopener noreferrer">GIT URL</a>
            </div>
          )}
        </div >
      </div>

    )
  }

}


export default ProjectItem;