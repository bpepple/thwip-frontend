import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import cvLogo from '../img/comicvine_logo.png';

class Footer extends PureComponent {
  render() {
    const { cvUrl } = this.props;

    return (
      <Row className="justify-content-end">
        <h6>
          Metadata retrieved from
          {' '}
          <a href={cvUrl} target="_blank" rel="noopener noreferrer">
            <img src={cvLogo} alt="Comic Vine" />
          </a>
        </h6>
      </Row>
    );
  }
}

Footer.propTypes = {
  cvUrl: PropTypes.string.isRequired,
};

export default Footer;
