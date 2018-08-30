import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SeriesCard from './SeriesCard';
import MainPagination from './MainPagination';
import Footer from './Footer';

class SeriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page
    };
  }

  componentDidMount() {
    this.props.fetchSeriesList(this.state.page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.props.fetchSeriesList(currentPage);
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
  // Don't make the data object required since
  // the initial value of null will produce an error.
  data: PropTypes.object,
  loaded: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return { data: state.fetch.data, loaded: state.fetch.loaded };
};

export default connect(
  mapStateToProps,
  actions
)(SeriesList);
