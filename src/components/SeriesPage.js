import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SeriesCard from './SeriesCard';
import MainPagination from './MainPagination';
import Footer from './Footer';
import history from '../History';
import { authHeader } from './helpers/auth-header';

class SeriesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: this.props.page,
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchSeries(this.state.page);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.fetchSeries(currentPage);
  };

  fetchSeries(page) {
    const { endpoint, slug } = this.props;

    const apiUrl = endpoint + '?page=' + page;
    let newUrl;
    if (!slug) {
      newUrl = '/series/page/' + page;
    } else {
      newUrl = '/publisher/' + slug + '/page/' + page;
    }

    fetch(apiUrl, { method: 'GET', headers: authHeader() })
      .then(response => {
        if (response.status !== 200) {
          console.error('Something went wrong');
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, page: page, loaded: true }))
      .catch(error => console.error('Fetch Series Error:\n', error));

    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      history.push(newUrl);
    }
  }

  render() {
    const { data, loaded, page } = this.state;

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

SeriesPage.propTypes = {
  endpoint: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  slug: PropTypes.string
};

export default SeriesPage;
