import React, { Component } from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

const ModalHeadings = ({ text }) => <p className="font-weight-bold">{text}</p>;

class ModalDate extends Component {
  render() {
    /* TODO: Format the date. */
    const { date } = this.props;

    return (
      <React.Fragment>
        <ModalHeadings text="Date" />
        <p>{date}</p>
      </React.Fragment>
    );
  }
}

const ModalSummary = ({ text }) => (
  <React.Fragment>
    <ModalHeadings text="Summary" />
    <p>{text}</p>
  </React.Fragment>
);

const ModalCreators = ({ creators }) => (
  <React.Fragment>
    <ModalHeadings text="Creators" />
    <ListGroup>
      <Row>
        {creators.map(function(listValue, index) {
          return (
            <Col md="6" key={index}>
              <ListGroupItem>{listValue}</ListGroupItem>
            </Col>
          );
        })}
      </Row>
    </ListGroup>
  </React.Fragment>
);

const IssueModal = ({ toggle, modal, data, creators }) => (
  <Modal isOpen={modal} toggle={toggle} centered>
    <ModalHeader toggle={toggle}>{data.__str__}</ModalHeader>
    <ModalBody>
      {data.date && <ModalDate date={data.date} />}
      {data.desc && <ModalSummary text={data.desc} />}
      {creators.length > 0 && <ModalCreators creators={creators} />}
    </ModalBody>
    <ModalFooter>
      <Button onClick={toggle}>Close</Button>
    </ModalFooter>
  </Modal>
);

export default IssueModal;
