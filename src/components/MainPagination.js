import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row
} from 'reactstrap';

class MainPagination extends Component {
  constructor(props) {
    super(props);

    this.state = { itemsPerPage: 30, currentPage: 1 };
  }

  render() {
    const { itemsPerPage, currentPage } = this.state;
    const { totalRecords } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalRecords / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(page => {
      return (
        <PaginationItem
          key={page}
          active={`${currentPage === page ? true : ''}`}
        >
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
      );
    });

    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Pagination className="justify-content-center">
            {renderPageNumbers}
          </Pagination>
        </Row>
      </Container>
    );
  }
}

MainPagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
};

export default MainPagination;
