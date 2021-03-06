import React from 'react';
import PropTypes from 'prop-types';
import ModalHeadings from './ModalHeadings';
import ModalSummary from './ModalSummary';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

const ModalYear = ({ year }) => (
  <React.Fragment>
    <ModalHeadings text="Year" />
    <p>{year}</p>
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

ListCardsModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

export default ListCardsModal;
