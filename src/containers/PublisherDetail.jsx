import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPublisherDetail } from '../actions';
import SeriesCard from '../components/SeriesCard';
import Footer from '../components/Footer';

class PublisherDetail extends Component {
  componentDidMount() {
    const { page, slug } = this.props.match.params;
    this.props.fetchPublisherDetail(slug, page);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  onPageChanged = (pageData) => {
    const { currentPage } = pageData;
    const { slug } = this.props.match.params;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page) || currentPage === 0) {
      return;
    }

    this.props.fetchPublisherDetail(slug, currentPage);
  };

  render() {
    const { data, loaded, page, error } = this.props;

    if (error) {
      return <h2 className="text-danger text-center">Error: {error}</h2>;
    }

    return loaded ? (
      <React.Fragment>
        <SeriesCard
          data={data}
          totalRecords={data.count}
          onPageChanged={this.onPageChanged}
          page={Number(page)}
        />
        <Footer cvUrl="https://comicvine.gamespot.com/" />
      </React.Fragment>
    ) : null;
  }
}

PublisherDetail.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  data: state.fetch.data,
  loaded: state.fetch.loaded,
  page: state.fetch.page,
  error: state.fetch.error,
});

export default connect(
  mapStateToProps,
  { fetchPublisherDetail },
)(PublisherDetail);
