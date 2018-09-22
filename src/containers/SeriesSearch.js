import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchSeriesSearch } from '../actions';
import { connect } from 'react-redux';
import SeriesCard from '../components/SeriesCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';
import queryString from 'query-string';

class SeriesSearch extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    const values = queryString.parse(this.props.location.search);

    this.props.fetchSeriesSearch(values.search, page);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { page } = this.props;
    const values = queryString.parse(this.props.location.search);

    /* Don't fetch if the page twice. */
    if (currentPage === Number(page) || currentPage === 0) {
      return;
    }

    this.props.fetchSeriesSearch(values.search, currentPage);
  };

  render() {
    const { data, loaded, page, error } = this.props;

    if (error) {
      return <h2 className="text-danger text-center">Error: {error}</h2>;
    }

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

SeriesSearch.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  data: state.fetch.data,
  loaded: state.fetch.loaded,
  page: state.fetch.page,
  error: state.fetch.error
});

export default connect(
  mapStateToProps,
  { fetchSeriesSearch }
)(SeriesSearch);
