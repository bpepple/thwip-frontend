import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {
  Container,
  Col,
  Fade,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardFooter,
  CardText,
  CardBody,
  Button
} from 'reactstrap';

const uuid = shortid.generate;

const PublisherCard = ({ data }) => (
  <Container fluid={true}>
    <Fade in={true}>
      <Row>
        {data.map(el => (
          <Col xs="2" key={uuid()}>
            <Card className="text-white bg-dark mb-3" key={uuid()}>
              <CardHeader className="text-center" key={uuid()}>
                {el.name}
              </CardHeader>
              <CardImg src={el.image} alt="Placeholder image" key={uuid()} />
              <CardBody>
                <CardText>{el.series_count} Series</CardText>
              </CardBody>
              <CardFooter>
                <Button
                  color="primary"
                  href={`/publisher/${el.slug}`}
                  key={uuid()}
                >
                  Open
                </Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Fade>
  </Container>
);

PublisherCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default PublisherCard;
