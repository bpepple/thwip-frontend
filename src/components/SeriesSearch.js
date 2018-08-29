import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SeriesCard from './SeriesCard';
import MainPagination from './MainPagination';
import Footer from './Footer';
import queryString from 'query-string';

class SeriesSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page
    };
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);

    this.props.fetchSeriesSearch(this.state.page, values.search);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const values = queryString.parse(this.props.location.search);

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.props.fetchSeriesSearch(currentPage, values.search);
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

const mapStateToProps = state => {
  return { data: state.fetch.data, loaded: state.fetch.loaded };
};

export default connect(
  mapStateToProps,
  actions
)(SeriesSearch);
