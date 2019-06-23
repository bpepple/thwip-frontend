import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';
import noImage from '../img/creator-not-found.png';

const CreatorImage = ({ src }) => {
  if (src) {
    return (
      <Media object className="rounded-left" src={src} alt="Creator image" />
    );
  }
  return (
    <Media
      object
      className="rounded-left"
      src={noImage}
      alt="Missing image"
    />
  );
};

CreatorImage.defaultProps = {
  src: null,
};

CreatorImage.propTypes = {
  src: PropTypes.string,
};

export default CreatorImage;
