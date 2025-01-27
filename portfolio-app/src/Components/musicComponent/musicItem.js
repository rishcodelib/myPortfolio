import React, { Component } from "react";
import PropTypes from 'prop-types';
import './musicItem.css'; // Corrected path
import MusicTag from '../projectTagComponent/musicTag'; // Corrected path
export class MusicItem extends Component {
  render() {
    let { projectName, shortDesc, description, alias, tag } = this.props;

    return (

      <div className="music-card border-1">
        <div className="card-body">
          <div className="card-title">
            <h3>{projectName} </h3>
            <hr className="hr-divider w-25 m-0"></hr>
            <p className="text-secondary h5 pt-2">
              {alias}
            </p>
          </div>
          <h6 className="text-secondary h6 py-2">{shortDesc}</h6>
          <p className="music-desc">{description}</p>
          <div className="tags py-4">
            {tag.map((t, index) => (
              <MusicTag key={index} tagName={t} />
            ))}
          </div>
        </div>
      </div>
    )
  }

}
MusicItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  shortDesc: PropTypes.string,
  description: PropTypes.string,
  alias: PropTypes.string.isRequired,
  tag: PropTypes.arrayOf(PropTypes.string),
};

export default MusicItem;