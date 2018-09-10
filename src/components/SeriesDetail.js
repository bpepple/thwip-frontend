import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import IssueCard from './IssueCard';
import MainPagination from './MainPagination';
import Footer from './Footer';

class SeriesDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchSeriesDetail(this.state.page, slug);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { slug } = this.props.match.params;

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.props.fetchSeriesDetail(currentPage, slug);
    this.setState({ page: currentPage });
  };

  render() {
    const { data, loaded, count } = this.props;
    const { page } = this.state;

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
  data: PropTypes.object,
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
    count: state.fetch.count
  };
};

export default connect(
  mapStateToProps,
  actions
)(SeriesDetail);
