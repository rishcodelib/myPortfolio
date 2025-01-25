import React, { Component } from "react";
import './projectItem.css'; 
import Tag from '../projectTagComponent/projectTag';
import PropTypes from 'prop-types';
export class ProjectItem extends Component {
  render() {
    let { projectName, alias, description, liveUrl, gitUrl, demoUrl, imgSrc, tag } = this.props;

    return (

      <div className="card border-0 bg-proj-carousel pb-3">
        <img className="card-img-top" src={imgSrc} alt="projectImage" />
        <div className="card-body">
          <h5 className="card-title">{projectName} <span className="text-secondary">
            {alias}
          </span></h5>
          <p className="card-text">{description} </p>

          <div className="tags">
            {tag.map((t) => (
              <Tag key={t} tagName={t} />
            ))}
          </div>
        </div>
        <hr className="divider" />
        <div className="row">
          <div className="col-md-4 text-center">
            {liveUrl && (
              <a href={liveUrl} className="btn btn-primary process-btn btn-live" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link "></i> LIVE URL</a>
            )}
          </div>
          <div className="col-md-4 text-center">
            {demoUrl && (
              <a href={demoUrl} className="btn btn-secondary process-btn btn-demo" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code "></i> DEMO</a>
            )}
          </div>
          <div className="col-md-4 text-center">
            {gitUrl && (
              <a href={gitUrl} className="btn btn-dark process-btn btn-git" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github "></i> GITHUB</a>
            )}
          </div>
        </div >
      </div>

    )
  }

}
ProjectItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  alias: PropTypes.string,
  description: PropTypes.string,
  liveUrl: PropTypes.string,
  gitUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  imgSrc: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string,
};

export default ProjectItem;