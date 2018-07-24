import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Container,
  Fade,
  Col,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardFooter,
  CardText,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class SeriesCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, desc: '', title: '' };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  open(description, title) {
    this.setState({
      modal: true,
      desc: description,
      title: title
    });
  }

  render() {
    const { data } = this.props;
    const { modal, desc, title } = this.state;

    return (
      <Container fluid={true}>
        <Modal isOpen={modal} toggle={this.toggle} centered>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>{desc}</ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        <Fade in={true}>
          <Row>
            {data.map(el => (
              <Col xs="2" key={el.slug}>
                <Card className="text-white bg-dark mb-3">
                  <CardHeader className="text-center">{el.name}</CardHeader>
                  <CardImg src={el.image} alt="Placeholder image" />
                  <CardBody>
                    <CardText>{el.issue_count} issues</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" href={`/series/${el.slug}`}>
                      Open
                    </Button>
                    <Button
                      className="float-right"
                      color="info"
                      onClick={this.open.bind(this, el.desc, el.name)}
                    >
                      <FontAwesomeIcon icon="info-circle" size="lg" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    );
  }
}

SeriesCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default SeriesCard;
