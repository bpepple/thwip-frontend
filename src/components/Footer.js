import React from 'react';
import PropTypes from 'prop-types';
import cvLogo from '../img/comicvine_logo.png';
import { Container, Row } from 'reactstrap';

const Footer = ({ cvUrl }) => (
  <Container fluid={true}>
    <Row className="justify-content-end">
      <h6>
        Metadata retrieved from{' '}
        <a href={cvUrl} target="_blank">
          <img src={cvLogo} alt="Comic Vine" />
        </a>
      </h6>
    </Row>
  </Container>
);

Footer.propTypes = {
  cvUrl: PropTypes.string.isRequired
};

export default Footer;
