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

const Body = ({ text }) => (
  <CardBody>
    <CardText>{text} Issues</CardText>
  </CardBody>
);

const ArcImg = ({ img }) => {
  let i;
  if (img !== null) {
    i = <CardImg src={img} alt="Issue Image" />;
  } else {
    i = <CardImg src={missingImg} alt="Placeholder image" />;
  }
  return i;
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

class ArcCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, arcData: {} };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  open(arcData) {
    this.setState({
      modal: true,
      arcData: arcData
    });
  }

  render() {
    const { data, totalRecords, onPageChanged, page } = this.props;
    const { modal, arcData } = this.state;

    const cards = data.results.map(el => {
      return (
        <Col xs="2" key={el.slug}>
          <Card className="text-white bg-dark mb-3">
            <CardHeader className="text-center">{el.name}</CardHeader>
            <ArcImg img={el.image} />
            <Progress value={el.percent_read} />
            <Body text={el.issue_count} />
            <CardFooter>
              <OpenButton url={`/arc/${el.slug}/page/1`} />
              <InfoButton click={this.open.bind(this, el)} />
            </CardFooter>
          </Card>
        </Col>
      );
    });

    return data.results ? (
      <React.Fragment>
        <Fade in={true}>
          <ListCardsModal toggle={this.toggle} modal={modal} data={arcData} />
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

ArcCard.propTypes = {
  data: PropTypes.object.isRequired,
  totalRecords: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default ArcCard;
