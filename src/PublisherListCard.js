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
  CardText,
  CardBody,
  Button
} from "reactstrap";

const uuid = shortid.generate;

const PublisherListCard = ({ data }) => (
  <Container>
    <Row>
      {data.map(el => (
        <Col xs="3" key={uuid()}>
          <Card className="text-white bg-dark mb-3" key={uuid()}>
            <CardHeader className="text-center" key={uuid()}>
              {el.name}
            </CardHeader>
            <CardImg src={el.image} alt="Placeholder image" key={uuid()} />
            <CardBody className="text-right">
              <CardText>{el.series_count} Series</CardText>
              <Button
                color="primary"
                href={`/publisher/${el.slug}`}
                key={uuid()}
              >
                Open
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

PublisherListCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default PublisherListCard;
