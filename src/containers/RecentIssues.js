import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import IssueCard from '../components/IssueCard';
import MainPagination from '../components/MainPagination';
import Footer from '../components/Footer';

class RecentIssues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page
    };
  }

  componentDidMount() {
    this.props.fetchRecentIssues(this.state.page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.props.fetchRecentIssues(currentPage);
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

RecentIssues.propTypes = {
  data: PropTypes.object,
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
    count: state.fetch.count
  };
};

export default connect(
  mapStateToProps,
  actions
)(RecentIssues);
