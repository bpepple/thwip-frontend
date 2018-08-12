import React from 'react';
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
