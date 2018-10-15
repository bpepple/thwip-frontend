import React from 'react';
import PropTypes from 'prop-types';
import ModalHeadings from './ModalHeadings';

const ModalSummary = ({ text }) => (
  <React.Fragment>
    <ModalHeadings text="Summary" />
    <p>{text}</p>
  </React.Fragment>
);

ModalSummary.propTypes = {
  text: PropTypes.string.isRequired
};

export default ModalSummary;
