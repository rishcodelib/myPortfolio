import React from "react";
import PropTypes from 'prop-types';
import './projectTag.css';

function MusicTag({ tagName }) {
  // <i class='fa-solid fa-music'></i>
  // <i class='fa-solid fa-guitar'></i>
  // <i class='fa-solid fa-drum'></i>
  // <i class='fa-solid fa-microphone-lines'></i>
  // <i class='fa-thin fa-piano'></i>
  // <i class='fa-solid fa-drum-steelpan'></i>
  // <i class='fa-solid fa-headphones'></i>
  // <i class='fa-solid fa-users-rays'></i>
  return (
    <span dangerouslySetInnerHTML={{ __html: tagName }} />
  );
}

MusicTag.propTypes = {
  tagName: PropTypes.string.isRequired
};

export default MusicTag;