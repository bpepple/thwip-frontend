import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import {
  Container,
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
} from "reactstrap";

const uuid = shortid.generate;

const IssueListCard = ({ data }) => (
  <Container>
    <Row>
      {data.map(el => (
        <Col xs="3" key={uuid()}>
          <Card className="text-white bg-dark mb-3" key={uuid()}>
            <CardHeader className="text-center" key={uuid()}>
              {el.__str__}
            </CardHeader>
            <CardImg src={el.image} alt="Placeholder image" key={uuid()} />
            <Progress animated value={el.read_percentage} />
            <CardBody>
              <CardText key={uuid()}>{el.page_count} pages</CardText>
            </CardBody>
            <CardFooter>
              <Button color="primary" href="" key={uuid()}>
                Read
              </Button>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

IssueListCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default IssueListCard;
