import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import IssueCard from '../components/IssueCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';

class SeriesDetail extends Component {
  componentDidMount() {
    const { slug, page } = this.props.match.params;
    this.props.fetchSeriesDetail(slug, page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { slug } = this.props.match.params;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page)) {
      return;
    }

    this.props.fetchSeriesDetail(slug, currentPage);
    this.setState({ page: currentPage });
  };

  render() {
    const { data, loaded, page, count } = this.props;

    return loaded ? (
      <React.Fragment>
        <IssueCard data={data} />
        <MainPagination
          totalRecords={count}
          onPageChanged={this.onPageChanged}
          page={page}
        />
        <Footer cvUrl="https://comicvine.gamespot.com/" />
      </React.Fragment>
    ) : null;
  }
}

SeriesDetail.propTypes = {
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
    count: state.fetch.count,
    page: state.fetch.page
  };
};

export default connect(
  mapStateToProps,
  actions
)(SeriesDetail);
