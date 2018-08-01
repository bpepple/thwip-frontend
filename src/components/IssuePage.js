import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IssueCard from './IssueCard';
import MainPagination from './MainPagination';

class IssuePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentPage: 1,
      loaded: false
    };
  }

  componentDidMount() {
    let url = this.props.endpoint + '?page=' + this.state.currentPage;
    this.fetchIssues(url);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    /**
     * Don't fetch the page twice.
     */
    if (currentPage === Number(this.state.currentPage)) {
      return;
    }

    let url = this.props.endpoint + '?page=' + currentPage;
    this.fetchIssues(url);
  };

  fetchIssues(url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.error('Something went wrong');
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render() {
    const { data, loaded } = this.state;

    return loaded ? (
      <React.Fragment>
        <IssueCard data={data} />
        <MainPagination
          totalRecords={data.count}
          onPageChanged={this.onPageChanged}
        />
      </React.Fragment>
    ) : null;
  }
}

IssuePage.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default IssuePage;