import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SeriesCard from '../components/SeriesCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';

class SeriesList extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.fetchSeriesList(page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page)) {
      return;
    }

    this.props.fetchSeriesList(currentPage);
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

SeriesList.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
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
    page: state.fetch.page,
    error: state.fetch.error
  };
};

export default connect(
  mapStateToProps,
  actions
)(SeriesList);
