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
  CardBody,
  CardText,
  Progress,
  Button
} from 'reactstrap';

const Body = ({ text }) => (
  <CardBody>
    <CardText>{text} Pages</CardText>
  </CardBody>
);

const ReadButton = ({ url }) => (
  <Button color="primary" href={url}>
    Read
  </Button>
);

const InfoButton = ({ click }) => (
  <Button className="float-right" color="info" onClick={click}>
    <FontAwesomeIcon icon="info-circle" size="lg" />
  </Button>
);

class IssueCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, issueData: [], creators: [] };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  open(issueData) {
    this.setState({
      modal: true,
      issueData: issueData,
      creators: issueData.credits
    });
  }

  render() {
    const { data } = this.props;
    const { modal, issueData, creators } = this.state;

    return (
      <Container fluid={true}>
        <CardsModal
          toggle={this.toggle}
          modal={modal}
          data={issueData}
          creators={creators}
        />
        <Fade in={true}>
          <Row>
            {data.results.map(el => (
              <Col xs="2" key={el.slug}>
                <Card className="text-white bg-dark mb-3">
                  <CardHeader className="text-center">{el.__str__}</CardHeader>
                  <CardImg src={el.image} alt="Placeholder image" />
                  <Progress value={el.percent_read} />
                  <Body text={el.page_count} />
                  <CardFooter>
                    <ReadButton url={`/reader/${el.slug}`} />
                    <InfoButton click={this.open.bind(this, el)} />
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
  data: PropTypes.object.isRequired
};

export default IssueCard;
