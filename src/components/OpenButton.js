import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const OpenButton = ({ url }) => (
  <Button color="primary" href={url}>
    Open
  </Button>
);

OpenButton.propTypes = {
  url: PropTypes.string.isRequired
};

export default OpenButton;
