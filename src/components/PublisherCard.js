import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListCardsModal from './ListCardsModal';
import missingImg from '../img/image-not-found.png';

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

const Body = ({ text }) => (
  <CardBody>
    <CardText>{text} Series</CardText>
  </CardBody>
);

const OpenButton = ({ url }) => (
  <Button color="primary" href={url}>
    Open
  </Button>
);

const InfoButton = ({ click }) => (
  <Button className="float-right" color="info" onClick={click}>
    <FontAwesomeIcon icon="info-circle" size="lg" />
  </Button>
);

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

    return data.results ? (
      <Container fluid={true}>
        <ListCardsModal
          toggle={this.toggle}
          modal={modal}
          data={publisherData}
        />
        <Fade in={true}>
          <Row>
            {data.results.map(el => (
              <Col xs="2" key={el.slug}>
                <Card className="text-white bg-dark mb-3">
                  <CardHeader className="text-center">{el.name}</CardHeader>
                  {el.image !== null ? (
                    <CardImg src={el.image} alt="Publisher Logo" />
                  ) : (
                    <CardImg src={missingImg} alt="Placeholder image" />
                  )}
                  <Body text={el.series_count} />
                  <CardFooter>
                    <OpenButton url={`/publisher/${el.slug}/page/1`} />
                    <InfoButton click={this.open.bind(this, el)} />
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    ) : null;
  }
}

PublisherCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default PublisherCard;
