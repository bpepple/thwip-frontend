import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SeriesCard from '../components/SeriesCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';

class PublisherDetail extends Component {
  componentDidMount() {
    const { page, slug } = this.props.match.params;
    this.props.fetchPublisherDetail(slug, page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { slug } = this.props.match.params;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page)) {
      return;
    }

    this.props.fetchPublisherDetail(slug, currentPage);
  };

  render() {
    const { data, loaded, page } = this.props;

    return loaded ? (
      <React.Fragment>
        <SeriesCard data={data} />
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

PublisherDetail.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired
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
)(PublisherDetail);
