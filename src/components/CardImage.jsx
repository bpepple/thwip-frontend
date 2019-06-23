import React from 'react';
import PropTypes from 'prop-types';
import { CardImg } from 'reactstrap';
import missingImg from '../img/image-not-found.png';

const CardImage = ({ src }) => {
  if (src !== null) {
    return <CardImg src={src} alt="Card Image" />;
  } else {
    return <CardImg src={missingImg} alt="Placeholder image" />;
  }
};

CardImage.propTypes = {
  src: PropTypes.string
};

export default CardImage;
