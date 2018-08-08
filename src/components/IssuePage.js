import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IssueCard from './IssueCard';
import MainPagination from './MainPagination';
import Footer from './Footer';
import history from './History';

class IssuePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: this.props.page,
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchIssues(this.state.page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.fetchIssues(currentPage);
  };

  fetchIssues(page) {
    const { endpoint, slug } = this.props;

    const apiUrl = endpoint + '?page=' + page;
    let newUrl;
    if (slug) {
      newUrl = '/series/' + slug + '/page/' + page;
    } else {
      newUrl = '/issues/recent/page/' + page;
    }

    fetch(apiUrl)
      .then(response => {
        if (response.status !== 200) {
          console.error('Something went wrong');
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, page: page, loaded: true }));

    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      history.push(newUrl);
    }
  }

  render() {
    const { data, loaded, page } = this.state;

    return loaded ? (
      <React.Fragment>
        <IssueCard data={data} />
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

IssuePage.propTypes = {
  endpoint: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  slug: PropTypes.string
};

export default IssuePage;
