import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRecentIssues } from '../actions';
import { connect } from 'react-redux';
import IssueCard from '../components/IssueCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';

class RecentIssues extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.fetchRecentIssues(page);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page)) {
      return;
    }

    this.props.fetchRecentIssues(currentPage);
  };

  render() {
    const { data, loaded, page, count, error } = this.props;

    if (error) {
      return <h2 className="text-danger text-center">Error: {error}</h2>;
    }

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

RecentIssues.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
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
  count: state.fetch.count,
  page: state.fetch.page,
  error: state.fetch.error
});

export default connect(
  mapStateToProps,
  { fetchRecentIssues }
)(RecentIssues);
