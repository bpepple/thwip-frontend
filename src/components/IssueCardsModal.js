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

const ModalCredits = ({ credits }) => (
  <React.Fragment>
    <ModalHeadings text="Credits" />
    <Row>
      {credits.map(function(credit, index) {
        return (
          <Col md="6" key={index}>
            <Media className="mb-3 border rounded">
              <Media left>
                {credit.image !== null ? (
                  <Media
                    object
                    className="rounded-left"
                    src={credit.image}
                    alt="{credit.creator} image"
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
                {credit.creator}
                <br />
                <ModalRole roles={credit.role} />
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
    const { toggle, modal, issue, credits } = this.props;

    return issue ? (
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>{issue.__str__}</ModalHeader>
        <ModalBody>
          {issue.date && <ModalDate date={issue.date} />}
          {issue.year && <ModalYear year={issue.year} />}
          {issue.desc && <ModalSummary text={issue.desc} />}
          {credits.length > 0 && <ModalCredits credits={credits} />}
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
  credits: PropTypes.array
};

export default IssueCardsModal;
