import React, { Component } from 'react';
import PropTypes from 'prop-types';
import missingImg from '../img/creator-not-found.png';
import {
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  Button
} from 'reactstrap';

const ModalHeadings = ({ text }) => <p className="font-weight-bold">{text}</p>;

const ModalDate = ({ date }) => (
  <React.Fragment>
    <ModalHeadings text="Date" />
    <p>{new Date(date).toLocaleDateString()}</p>
  </React.Fragment>
);

const ModalYear = ({ year }) => (
  <React.Fragment>
    <ModalHeadings text="Year" />
    <p>{year}</p>
  </React.Fragment>
);

const ModalSummary = ({ text }) => (
  <React.Fragment>
    <ModalHeadings text="Summary" />
    <p>{text}</p>
  </React.Fragment>
);

const ModalRole = ({ roles }) => (
  <React.Fragment>
    {roles
      .map((t, index) => (
        <span key={index}>
          <small>
            <em>{t.name}</em>
          </small>
        </span>
      ))
      .reduce((prev, curr) => [prev, ', ', curr])}
  </React.Fragment>
);

const ModalCreators = ({ creators }) => (
  <React.Fragment>
    <ModalHeadings text="Creators" />
    <Row>
      {creators.map(function(listValue, index) {
        return (
          <Col md="6" key={index}>
            <Media className="mb-3 border rounded">
              <Media left>
                {listValue.image !== null ? (
                  <Media
                    object
                    className="rounded-left"
                    src={listValue.image}
                    alt="{listValue.creator} image"
                  />
                ) : (
                  <Media
                    object
                    className="rounded-left"
                    src={missingImg}
                    alt="Generic placeholder image"
                  />
                )}
              </Media>
              <Media body className="ml-2 mt-2">
                {listValue.creator}
                <br />
                <ModalRole roles={listValue.role} />
              </Media>
            </Media>
          </Col>
        );
      })}
    </Row>
  </React.Fragment>
);

class CardsModal extends Component {
  render() {
    const { toggle, modal, issue, creators } = this.props;

    return issue ? (
      <Modal isOpen={modal} toggle={toggle} centered>
        {issue.__str__ ? (
          <ModalHeader toggle={toggle}>{issue.__str__}</ModalHeader>
        ) : (
          <ModalHeader toggle={toggle}>{issue.name}</ModalHeader>
        )}
        <ModalBody>
          {issue.date && <ModalDate date={issue.date} />}
          {issue.year && <ModalYear year={issue.year} />}
          {issue.desc && <ModalSummary text={issue.desc} />}
          {creators.length > 0 && <ModalCreators creators={creators} />}
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    ) : null;
  }
}

CardsModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  issue: PropTypes.object,
  creators: PropTypes.array.isRequired
};

export default CardsModal;
