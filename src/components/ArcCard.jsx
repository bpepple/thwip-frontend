import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Fade,
  Col,
  Row,
  Card,
  CardHeader,
  CardFooter,
  Progress,
} from 'reactstrap';
import OpenButton from './OpenButton';
import InfoButton from './InfoButton';
import CardImage from './CardImage';
import SeriesCardBody from './SeriesCardBody';
import ListCardsModal from './ListCardsModal';
import MainPagination from './MainPagination';

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
      arcData,
    });
  }

  render() {
    const { data, totalRecords, onPageChanged, page } = this.props;
    const { modal, arcData } = this.state;

    const cards = data.results.map(el => (
      <Col xs="2" key={el.slug}>
        <Card className="text-white bg-dark mb-3">
          <CardHeader className="text-center">{el.name}</CardHeader>
          <CardImage src={el.image} />
          <Progress value={el.percent_read} />
          <SeriesCardBody count={Number(el.issue_count)} />
          <CardFooter>
            <OpenButton url={`/arc/${el.slug}/page/1`} />
            <InfoButton click={this.open.bind(this, el)} />
          </CardFooter>
        </Card>
      </Col>
    ));

    return data.results ? (
      <React.Fragment>
        <Fade in>
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
  page: PropTypes.number.isRequired,
};

export default ArcCard;
