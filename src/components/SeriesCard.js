import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardsModal from './CardsModal';

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
  Progress
} from 'reactstrap';

class SeriesCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, seriesData: [] };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  open(seriesData) {
    this.setState({
      modal: true,
      seriesData: seriesData
    });
  }

  render() {
    const { data } = this.props;
    const { modal, seriesData } = this.state;

    return (
      <Container fluid={true}>
        <CardsModal
          toggle={this.toggle}
          modal={modal}
          data={seriesData}
          creators=""
        />
        <Fade in={true}>
          <Row>
            {data.results.map(el => (
              <Col xs="2" key={el.slug}>
                <Card className="text-white bg-dark mb-3">
                  <CardHeader className="text-center">{el.name}</CardHeader>
                  <CardImg src={el.image} alt="Placeholder image" />
                  <Progress value={el.percent_read} />
                  <CardBody>
                    <CardText>{el.issue_count} issues</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" href={`/series/${el.slug}/page/1`}>
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

SeriesCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default SeriesCard;
