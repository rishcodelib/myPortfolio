import React, { Component } from "react";
import './projectItem.css';

export class ProjectItem extends Component {
  render() {
    let { projectName, alias, description, liveUrl, gitUrl, demoUrl, imgSrc, tag } = this.props;

    return (

      <div className="card border-0 bg-proj-carousel">
        <img className="card-img-top" src={imgSrc} alt="projectImage" />
        <div className="card-body">
          <h5 className="card-title">{projectName} <span className="text-secondary">
            {alias}
          </span></h5>
          <p className="card-text">{description} </p>
          <p className="card-text"> Status:  project.status </p>
          <span >
            <p href=" #" className="project-tag btn-tag btn ">{tag}</p>
          </span>
        </div>
        <hr className="divider" />
        <div className="row">
          <div className="col-md-4 ">
            <a href={liveUrl} className="btn btn-primary process-btn btn-live">LIVE URL</a>
          </div>
          <div className="col-md-4 text-center">
            <a href={demoUrl} className="btn btn-secondary process-btn btn-demo">DEMO</a>
          </div>
          <div className="col-md-4 text-right ">
            <a href={gitUrl} className="btn btn-warning process-btn btn-git ">GIT URL</a>
          </div>
          {/* </div > -->/ */}
          {/* < !-- </div > Card Body */}
        </div >
        {/* </a > */}
      </div>

    )
  }

}


export default ProjectItem;