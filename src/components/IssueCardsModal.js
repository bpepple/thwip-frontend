import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalHeadings from './ModalHeadings';
import ModalSummary from './ModalSummary';
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

const pluralizeTitle = (count, noun, suffix = 's') =>
  `${noun}${count !== 1 ? suffix : ''}`;

const ModalDate = ({ date }) => (
  <React.Fragment>
    <ModalHeadings text="Date" />
    <p>{new Date(date).toLocaleDateString()}</p>
  </React.Fragment>
);

const ModalTitle = ({ text }) => (
  <React.Fragment>
    <ModalHeadings text="Title" />
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

const ModalArcs = ({ arcs }) => {
  if (arcs.length > 0) {
    return (
      <React.Fragment>
        <ModalHeadings text={pluralizeTitle(arcs.length, 'Story Arc')} />
        <p>
          {arcs
            .map(i => <span key={i.id}>{i.name}</span>)
            .reduce((prev, curr) => [prev, ', ', curr])}
        </p>
      </React.Fragment>
    );
  } else {
    return null;
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

const ModalCredits = ({ credits, roles }) => {
  if (credits.length > 0) {
    return (
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
  } else {
    return null;
  }
};

class IssueCardsModal extends Component {
  render() {
    const { toggle, modal, issue, credits, roles, arcs } = this.props;

    return issue ? (
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>{issue.__str__}</ModalHeader>
        <ModalBody>
          {issue.date && <ModalDate date={issue.date} />}
          {arcs && <ModalArcs arcs={arcs} />}
          {issue.name && <ModalTitle text={issue.name} />}
          {issue.desc && <ModalSummary text={issue.desc} />}
          {credits && <ModalCredits credits={credits} roles={roles} />}
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
  roles: PropTypes.object,
  arcs: PropTypes.array
};

export default IssueCardsModal;
