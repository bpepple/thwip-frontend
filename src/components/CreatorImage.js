import React from 'react';
import PropTypes from 'prop-types';
import missingImg from '../img/image-not-found.png';
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
        src={missingImg}
        alt="Generic placeholder image"
      />
    );
  }
};

CreatorImage.propTypes = {
  src: PropTypes.string
};

export default CreatorImage;
