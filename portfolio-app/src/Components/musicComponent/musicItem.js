import React, { Component } from "react";
import PropTypes from 'prop-types';
import './musicItem.css'; // Corrected path
import Tag from '../projectTagComponent/projectTag';
export class MusicItem extends Component {
  render() {
    let { projectName, ytEmbeddedLink, alias, tag } = this.props;

    return (

      <div className="card border-1">
        {/* <div dangerouslySetInnerHTML={{ __html: ytEmbeddedLink }} /> */}
        <div className="card-body">
          <h5 className="card-title">{projectName} | <span className="text-secondary">
            {alias}
          </span></h5>
          <div className="tags">
            {tag.map((t) => (
              <Tag key={t} tagName={t} />
            ))}
          </div>
        </div>
      </div>
    )
  }

}
MusicItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  ytEmbeddedLink: PropTypes.string.isRequired,
  liveUrl: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MusicItem;