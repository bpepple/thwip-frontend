import React from 'react';
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

const ModelRole = ({ roles }) => (
  <React.Fragment>
    {roles
      .map(t => (
        <span>
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
    <ListGroup>
      <Row>
        {creators.map(function(listValue, index) {
          return (
            <Col md="6" key={index}>
              <ListGroupItem>
                {listValue.creator}
                <br />
                <ModelRole roles={listValue.role} />
              </ListGroupItem>
            </Col>
          );
        })}
      </Row>
    </ListGroup>
  </React.Fragment>
);

const CardsModal = ({ toggle, modal, data, creators }) => (
  <Modal isOpen={modal} toggle={toggle} centered>
    {data.__str__ ? (
      <ModalHeader toggle={toggle}>{data.__str__}</ModalHeader>
    ) : (
      <ModalHeader toggle={toggle}>{data.name}</ModalHeader>
    )}
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

export default CardsModal;
