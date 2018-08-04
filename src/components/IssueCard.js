import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IssueModal from './IssueModal';

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
      creators: issueData.creators
    });
  }

  render() {
    const { data } = this.props;
    const { modal, issueData, creators } = this.state;

    return (
      <Container fluid={true}>
        <IssueModal
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
                  <Progress value={el.read_percentage} />
                  <CardBody>
                    <CardText>{el.page_count} pages</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" href={`/reader/${el.slug}`}>
                      Read
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

IssueCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default IssueCard;
