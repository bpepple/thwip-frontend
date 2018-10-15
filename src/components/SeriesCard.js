import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListCardsModal from './ListCardsModal';
import MainPagination from './MainPagination';
import missingImg from '../img/image-not-found.png';

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

const Body = ({ text }) => {
  if (Number(text) > 1) {
    return (
      <CardBody>
        <CardText>{text} Issues</CardText>
      </CardBody>
    );
  } else {
    return (
      <CardBody>
        <CardText>{text} Issue</CardText>
      </CardBody>
    );
  }
};

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

const SeriesImage = ({ img }) => {
  if (img !== null) {
    return <CardImg src={img} alt="Series Image" />;
  } else {
    return <CardImg src={missingImg} alt="Placeholder image" />;
  }
};

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
    const { data, totalRecords, onPageChanged, page } = this.props;
    const { modal, seriesData } = this.state;

    const cards = data.results.map(el => {
      return (
        <Col xs="2" key={el.slug}>
          <Card className="text-white bg-dark mb-3">
            <CardHeader className="text-center">{el.name}</CardHeader>
            <SeriesImage img={el.image} />
            <Progress value={el.percent_read} />
            <Body text={el.issue_count} />
            <CardFooter>
              <OpenButton url={`/series/${el.slug}/page/1`} />
              <InfoButton click={this.open.bind(this, el)} />
            </CardFooter>
          </Card>
        </Col>
      );
    });

    return data.results ? (
      <React.Fragment>
        <Fade in={true}>
          <ListCardsModal
            toggle={this.toggle}
            modal={modal}
            data={seriesData}
          />
          <Row>{cards}</Row>
          <MainPagination
            totalRecords={totalRecords}
            onPageChanged={onPageChanged}
            page={page}
          />
        </Fade>
      </React.Fragment>
    ) : null;
  }
}

SeriesCard.propTypes = {
  data: PropTypes.object.isRequired,
  totalRecords: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default SeriesCard;
