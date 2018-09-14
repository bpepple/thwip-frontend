import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListCardsModal from './ListCardsModal';

import {
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

const Body = ({ text }) => (
  <CardBody>
    <CardText>{text} Issues</CardText>
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

class SeriesCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, seriesData: {} };
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

    return data.results ? (
      <React.Fragment>
        <ListCardsModal toggle={this.toggle} modal={modal} data={seriesData} />
        <Fade in={true}>
          <Row>
            {data.results.map(el => (
              <Col xs="2" key={el.slug}>
                <Card className="text-white bg-dark mb-3">
                  <CardHeader className="text-center">{el.name}</CardHeader>
                  <CardImg src={el.image} alt="Placeholder image" />
                  <Progress value={el.percent_read} />
                  <Body text={el.issue_count} />
                  <CardFooter>
                    <OpenButton url={`/series/${el.slug}/page/1`} />
                    <InfoButton click={this.open.bind(this, el)} />
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Fade>
      </React.Fragment>
    ) : null;
  }
}

SeriesCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default SeriesCard;
