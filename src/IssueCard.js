import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
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
  CardBody,
  CardText,
  Progress,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const uuid = shortid.generate;

class IssueCard extends Component {
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
          <ModalHeader toggle={this.toggle}>{title} Summary</ModalHeader>
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
                    {el.__str__}
                  </CardHeader>
                  <CardImg
                    src={el.image}
                    alt="Placeholder image"
                    key={uuid()}
                  />
                  <Progress value={el.read_percentage} />
                  <CardBody>
                    <CardText key={uuid()}>{el.page_count} pages</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button
                      color="primary"
                      href={`/reader/${el.slug}`}
                      key={uuid()}
                    >
                      Read
                    </Button>
                    <Button
                      className="float-right"
                      color="info"
                      onClick={this.open.bind(this, el.desc, el.__str__)}
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

IssueCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default IssueCard;
