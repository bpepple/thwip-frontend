import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Fade,
  Col,
  Row,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Progress,
  Button,
} from 'reactstrap';
import InfoButton from './InfoButton';
import CardImage from './CardImage';
import IssueCardsModal from './IssueCardsModal';
import MainPagination from './MainPagination';

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

class IssueCard extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, issue: {}, credits: [], arcs: [] };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  open(issue) {
    const { credits, arcs } = this.props.data.entities;

    const issueCredits = [];
    issue.credits.map(i => issueCredits.push(credits[i]));

    const issueArcs = [];
    issue.arcs.map(i => issueArcs.push(arcs[i]));

    this.setState({
      modal: true,
      issue,
      credits: issueCredits,
      arcs: issueArcs,
    });
  }

  render() {
    const { totalRecords, page, onPageChanged } = this.props;
    const { result } = this.props.data;
    const { issues, roles } = this.props.data.entities;
    const { modal, issue, credits, arcs } = this.state;

    const cards = result.map(el => (
      <Col xs="2" key={issues[el].slug}>
        <Card className="text-white bg-dark mb-3">
          <CardHeader className="text-center">
            {issues[el].__str__}
          </CardHeader>
          <CardImage src={issues[el].image} />
          <Progress value={issues[el].percent_read} />
          <Body text={issues[el].page_count} />
          <CardFooter>
            <ReadButton url={`/reader/${issues[el].slug}`} />
            <InfoButton click={this.open.bind(this, issues[el])} />
          </CardFooter>
        </Card>
      </Col>
    ));

    return result ? (
      <React.Fragment>
        <Fade in={true}>
          <IssueCardsModal
            toggle={this.toggle}
            modal={modal}
            issue={issue}
            credits={credits}
            roles={roles}
            arcs={arcs}
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

IssueCard.propTypes = {
  data: PropTypes.object.isRequired,
  totalRecords: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default IssueCard;
