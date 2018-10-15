import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../img/creator-not-found.png';
import { Media } from 'reactstrap';

const CreatorImage = ({ src }) => {
  if (src) {
    return (
      <Media object className="rounded-left" src={src} alt="Creator image" />
    );
  } else {
    return (
      <Media
        object
        className="rounded-left"
        src={noImage}
        alt="Missing image"
      />
    );
  }
};

CreatorImage.propTypes = {
  src: PropTypes.string
};

export default CreatorImage;
