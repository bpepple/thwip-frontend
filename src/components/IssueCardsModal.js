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

const ModalSummary = ({ text }) => (
  <React.Fragment>
    <ModalHeadings text="Summary" />
    <p>{text}</p>
  </React.Fragment>
);

const CreatorImg = ({ img }) => {
  if (img) {
    return (
      <Media
        object
        className="rounded-left"
        src={img}
        alt="{credit.creator} image"
      />
    );
  } else {
    return (
      <Media
        object
        className="rounded-left"
        src={missingImg}
        alt="Generic placeholder image"
      />
    );
  }
};

const ModalRole = ({ credits, roles }) => (
  <React.Fragment>
    {credits
      .map((t, index) => (
        <span key={index}>
          <small>
            <em>{roles[t].name}</em>
          </small>
        </span>
      ))
      .reduce((prev, curr) => [prev, ', ', curr])}
  </React.Fragment>
);

const ModalCredits = ({ credits, roles }) => (
  <React.Fragment>
    <ModalHeadings text="Credits" />
    <Row>
      {credits.map(function(credit, index) {
        return (
          <Col md="6" key={index}>
            <Media className="mb-3 border rounded">
              <Media left>
                <CreatorImg img={credit.image} />
              </Media>
              <Media body className="ml-2 mt-2">
                {credit.creator}
                <br />
                <ModalRole credits={credit.role} roles={roles} />
              </Media>
            </Media>
          </Col>
        );
      })}
    </Row>
  </React.Fragment>
);

class IssueCardsModal extends Component {
  render() {
    const { toggle, modal, issue, credits, roles } = this.props;

    return issue ? (
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>{issue.__str__}</ModalHeader>
        <ModalBody>
          {issue.date && <ModalDate date={issue.date} />}
          {issue.desc && <ModalSummary text={issue.desc} />}
          {credits.length > 0 && (
            <ModalCredits credits={credits} roles={roles} />
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    ) : null;
  }
}

IssueCardsModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  issue: PropTypes.object.isRequired,
  credits: PropTypes.array,
  roles: PropTypes.object
};

export default IssueCardsModal;
