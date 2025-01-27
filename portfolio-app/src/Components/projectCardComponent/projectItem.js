import React, { Component } from "react";
import './projectItem.css';
import Tag from '../projectTagComponent/projectTag';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export class ProjectItem extends Component {
  render() {

    let { id, projectName, alias, shortDesc, imgSrc, tag } = this.props;

    return (
      <Link to={`${id}`} rel="noopener noreferrer" className="card-link text-decoration-none">
        <div className="project-card-body card border-0 bg-proj-carousel">
          <img className="card-img-top" src={imgSrc} alt="projectImage" />
          <div className="card-body">
            <h5 className="card-title">{projectName} <span className="text-secondary">
              {alias}
            </span></h5>
            <p className="card-text">{shortDesc} . . . </p>
            <div className="tags">
              {tag.map((t, index) => (
                <Tag key={index} tagName={t} />
              ))}
            </div>
          </div>
        </div>
      </Link>

    )
  }

}
ProjectItem.propTypes = {
  id: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
  alias: PropTypes.string,
  shortDesc: PropTypes.string,
  // liveUrl: PropTypes.string,
  // gitUrl: PropTypes.string,
  // demoUrl: PropTypes.string,
  imgSrc: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectItem;