import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

const InfoButton = ({ click }) => (
  <Button className="float-right" color="info" onClick={click}>
    <FontAwesomeIcon icon="info-circle" size="lg" />
  </Button>
);

InfoButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default InfoButton;
