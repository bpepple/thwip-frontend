import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

const ModalHeadings = ({ text }) => <p className="font-weight-bold">{text}</p>;

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

const ListCardsModal = ({ toggle, modal, data }) => (
  <Modal isOpen={modal} toggle={toggle} centered>
    <ModalHeader toggle={toggle}>{data.name}</ModalHeader>
    <ModalBody>
      {data.year && <ModalYear year={data.year} />}
      {data.desc && <ModalSummary text={data.desc} />}
    </ModalBody>
    <ModalFooter>
      <Button onClick={toggle}>Close</Button>
    </ModalFooter>
  </Modal>
);

export default ListCardsModal;
