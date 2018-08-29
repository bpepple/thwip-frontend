import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SeriesCard from './SeriesCard';
import MainPagination from './MainPagination';
import Footer from './Footer';

class PublisherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page,
      slug: this.props.match.params.slug
    };
  }

  componentDidMount() {
    const { page, slug } = this.state;
    this.props.fetchPublisherDetail(page, slug);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { page, slug } = this.state;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page)) {
      return;
    }

    this.props.fetchPublisherDetail(currentPage, slug);
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
)(PublisherDetail);
