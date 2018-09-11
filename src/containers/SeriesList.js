import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FETCH_SERIES_LIST } from '../actions/types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SeriesCard from '../components/SeriesCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';

class SeriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page
    };
  }

  componentDidMount() {
    this.props.fetchApiList(FETCH_SERIES_LIST, this.state.page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.props.fetchApiList(FETCH_SERIES_LIST, currentPage);
    this.setState({ page: currentPage });
  };

  render() {
    const { data, loaded } = this.props;
    const { page } = this.state;

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
  data: PropTypes.object,
  loaded: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return { data: state.fetch.data, loaded: state.fetch.loaded };
};

export default connect(
  mapStateToProps,
  actions
)(SeriesList);
