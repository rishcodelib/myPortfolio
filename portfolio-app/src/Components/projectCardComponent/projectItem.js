import React, { Component } from "react";
import './projectItem.css';
import Tag from '../projectTagComponent/projectTag';
import PropTypes from 'prop-types';
export class ProjectItem extends Component {
  render() {

    let { id, projectName, alias, description, imgSrc, tag } = this.props;

    console.log(id);

    return (
      <a href={`projects/${id}`} target="_blank" rel="noopener noreferrer" className="card-link text-decoration-none">
        <div className="card border-0 bg-proj-carousel">
          <img className="card-img-top" src={imgSrc} alt="projectImage" />
          <div className="card-body">
            <h5 className="card-title">{projectName} <span className="text-secondary">
              {alias}
            </span></h5>
            <p className="card-text">{description} </p>

            <div className="tags">
              {tag.map((t, index) => (
                <Tag key={index} tagName={t} />
              ))}
            </div>
          </div>
        </div>
      </a>

    )
  }

}
ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  alias: PropTypes.string,
  description: PropTypes.string,
  // liveUrl: PropTypes.string,
  // gitUrl: PropTypes.string,
  // demoUrl: PropTypes.string,
  imgSrc: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectItem;