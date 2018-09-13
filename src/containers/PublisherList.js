import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import PublisherCard from '../components/PublisherCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';

class PublisherList extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.fetchPublisherList(page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page)) {
      return;
    }

    this.props.fetchPublisherList(currentPage);
  };

  render() {
    const { data, loaded, page } = this.props;

    return loaded ? (
      <React.Fragment>
        <PublisherCard data={data} />
        <MainPagination
          totalRecords={data.count}
          onPageChanged={this.onPageChanged}
          page={page}
        />
        <Footer cvUrl="https://comicvine.gamespot.com/" />
      </React.Fragment>
    ) : null;
  }
}

PublisherList.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return {
    data: state.fetch.data,
    loaded: state.fetch.loaded,
    page: state.fetch.page
  };
};

export default connect(
  mapStateToProps,
  actions
)(PublisherList);
