import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Container,
  Col,
  Fade,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardFooter,
  CardText,
  CardBody,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

const uuid = shortid.generate;

class PublisherCard extends Component {
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
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>{desc}</ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        <Fade in={true}>
          <Row>
            {data.map(el => (
              <Col xs="2" key={uuid()}>
                <Card className="text-white bg-dark mb-3" key={uuid()}>
                  <CardHeader className="text-center" key={uuid()}>
                    {el.name}
                  </CardHeader>
                  <CardImg
                    src={el.image}
                    alt="Placeholder image"
                    key={uuid()}
                  />
                  <CardBody>
                    <CardText>{el.series_count} Series</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button
                      color="primary"
                      href={`/publisher/${el.slug}`}
                      key={uuid()}
                    >
                      Open
                    </Button>
                    <Button
                      className="float-right"
                      color="info"
                      onClick={this.open.bind(this, el.desc, el.name)}
                      key={uuid()}
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

PublisherCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default PublisherCard;
