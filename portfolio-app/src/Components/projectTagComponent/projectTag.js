import React from "react";
import PropTypes from 'prop-types';
import './projectTag.css';

function Tag({ tagName }) {

  return (
    <p className="project-tag btn btn-tag ">
      <i className="fa-solid fa-tag"></i> {tagName}
      </p>
  );
}

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;