import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FETCH_PUBLISHER_DETAIL } from '../actions/types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SeriesCard from './SeriesCard';
import MainPagination from './MainPagination';
import Footer from './Footer';

class PublisherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchApiDetail(FETCH_PUBLISHER_DETAIL, this.state.page, slug);
  }

  onPageChanged = pageData => {
    const { currentPage } = pageData;
    const { slug } = this.props.match.params;

    /* Don't fetch the page twice. */
    if (currentPage === Number(this.state.page)) {
      return;
    }

    this.props.fetchApiDetail(FETCH_PUBLISHER_DETAIL, currentPage, slug);
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

PublisherDetail.propTypes = {
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
  return { data: state.fetch.data, loaded: state.fetch.loaded };
};

export default connect(
  mapStateToProps,
  actions
)(PublisherDetail);
