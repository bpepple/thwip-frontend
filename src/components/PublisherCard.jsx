import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenButton from './OpenButton';
import InfoButton from './InfoButton';
import CardImage from './CardImage';
import ListCardsModal from './ListCardsModal';
import MainPagination from './MainPagination';
import {
  Col,
  Fade,
  Row,
  Card,
  CardHeader,
  CardFooter,
  CardText,
  CardBody
} from 'reactstrap';

const Body = ({ text }) => (
  <CardBody>
    <CardText>{text} Series</CardText>
  </CardBody>
);

class PublisherCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, publisherData: {} };

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
    const { data, totalRecords, onPageChanged, page } = this.props;
    const { modal, publisherData } = this.state;

    const cards = data.results.map(el => {
      return (
        <Col xs="2" key={el.slug}>
          <Card className="text-white bg-dark mb-3">
            <CardHeader className="text-center">{el.name}</CardHeader>
            <CardImage src={el.image} />
            <Body text={el.series_count} />
            <CardFooter>
              <OpenButton url={`/publisher/${el.slug}/page/1`} />
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
            data={publisherData}
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

PublisherCard.propTypes = {
  data: PropTypes.object.isRequired,
  totalRecords: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default PublisherCard;
