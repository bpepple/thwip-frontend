import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import { Container, Col, Row, Card, CardImg, CardBody, CardTitle, CardLink } from "reactstrap";

const uuid = shortid.generate;

const Cards = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <Container>
      <Row>
      {data.map(el => (
        <Col xs="3" key={uuid()}>
          <Card key={uuid()}>
            <CardImg top src={el.image} alt="Placeholder image" key={uuid()} />
            <CardBody>
              <CardTitle key={uuid()}>{el.name}</CardTitle>
              <CardLink href="#" key={uuid()}>
                Open
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
  );

Cards.propTypes = {
  data: PropTypes.array.isRequired
};

export default Cards;
