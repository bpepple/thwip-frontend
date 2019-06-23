import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, CardText } from 'reactstrap';

const SeriesCardBody = ({ count }) => {
  if (count > 1) {
    return (
      <CardBody>
        <CardText>{count} Issues</CardText>
      </CardBody>
    );
  } else {
    return (
      <CardBody>
        <CardText>{count} Issue</CardText>
      </CardBody>
    );
  }
};

SeriesCardBody.propTypes = {
  count: PropTypes.number.isRequired
};

export default SeriesCardBody;
