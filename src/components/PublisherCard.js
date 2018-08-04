import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardsModal from './CardsModal';

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
  Button
} from 'reactstrap';

class PublisherCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, publisherData: [] };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  open(publisherData) {
    this.setState({
      modal: true,
      publisherData: publisherData
    });
  }

  render() {
    const { data } = this.props;
    const { modal, publisherData } = this.state;

    return (
      <Container fluid={true}>
        <CardsModal
          toggle={this.toggle}
          modal={modal}
          data={publisherData}
          creators=""
        />
        <Fade in={true}>
          <Row>
            {data.results.map(el => (
              <Col xs="2" key={el.slug}>
                <Card className="text-white bg-dark mb-3">
                  <CardHeader className="text-center">{el.name}</CardHeader>
                  <CardImg src={el.image} alt="Placeholder image" />
                  <CardBody>
                    <CardText>{el.series_count} Series</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button
                      color="primary"
                      href={`/publisher/${el.slug}/page/1`}
                    >
                      Open
                    </Button>
                    <Button
                      className="float-right"
                      color="info"
                      onClick={this.open.bind(this, el)}
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
  data: PropTypes.object.isRequired
};

export default PublisherCard;
