import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IssueCardsModal from './IssueCardsModal';
import missingImg from '../img/image-not-found.png';

import {
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

const DetailImg = ({ img }) => {
  let i;
  if (img !== null) {
    i = <CardImg src={img} alt="Issue Image" />;
  } else {
    i = <CardImg src={missingImg} alt="Placeholder image" />;
  }
  return i;
};

class IssueCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, issue: {}, credits: [] };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  open(issue, creditsIndex) {
    const { credits } = this.props.data.entities;

    let issueCredits = [];
    creditsIndex.map(creditIndex => issueCredits.push(credits[creditIndex]));

    this.setState({
      modal: true,
      issue: issue,
      credits: issueCredits
    });
  }

  render() {
    const { result } = this.props.data;
    const { issues } = this.props.data.entities;
    const { modal, issue, credits } = this.state;

    return result ? (
      <React.Fragment>
        <IssueCardsModal
          toggle={this.toggle}
          modal={modal}
          issue={issue}
          credits={credits}
        />
        <Fade in={true}>
          <Row>
            {result.map(el => (
              <Col xs="2" key={issues[el].slug}>
                <Card className="text-white bg-dark mb-3">
                  <CardHeader className="text-center">
                    {issues[el].__str__}
                  </CardHeader>
                  <DetailImg img={issues[el].image} />
                  <Progress value={issues[el].percent_read} />
                  <Body text={issues[el].page_count} />
                  <CardFooter>
                    <ReadButton url={`/reader/${issues[el].slug}`} />
                    <InfoButton
                      click={this.open.bind(
                        this,
                        issues[el],
                        issues[el].credits
                      )}
                    />
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

IssueCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default IssueCard;
