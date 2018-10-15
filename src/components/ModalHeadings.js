import React from 'react';
import PropTypes from 'prop-types';

const ModalHeadings = ({ text }) => <p className="font-weight-bold">{text}</p>;

ModalHeadings.propTypes = {
  text: PropTypes.string.isRequired
};

export default ModalHeadings;
