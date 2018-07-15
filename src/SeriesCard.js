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
  CardText,
  CardBody,
  Button
} from "reactstrap";

const uuid = shortid.generate;

const SeriesCard = ({ data }) => (
  <Container>
    <Row>
      {data.map(el => (
        <Col xs="3" key={uuid()}>
          <Card className="text-white bg-dark mb-3" key={uuid()}>
            <CardHeader className="text-center" key={uuid()}>
              {el.name}
            </CardHeader>
            <CardImg src={el.image} alt="Placeholder image" key={uuid()} />
            <CardBody>
              <CardText>{el.issue_count} issues</CardText>
            </CardBody>
            <CardFooter>
              <Button color="primary" href={`/series/${el.slug}`} key={uuid()}>
                Open
              </Button>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

SeriesCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default SeriesCard;
