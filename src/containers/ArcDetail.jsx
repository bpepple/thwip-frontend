import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArcDetail } from '../actions';
import IssueCard from '../components/IssueCard';
import Footer from '../components/Footer';

class ArcDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { slug, page } = match.params;
    this.props.fetchArcDetail(slug, page);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  onPageChanged = (pageData) => {
    const { match } = this.props;
    const { currentPage } = pageData;
    const { slug } = match.params;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page) || currentPage === 0) {
      return;
    }

    this.props.fetchArcDetail(slug, currentPage);
  };

  render() {
    const { data, loaded, page, count, error } = this.props;

    if (error) {
      return <h2 className="text-danger text-center">Error: {error}</h2>;
    }

    return loaded ? (
      <React.Fragment>
        <IssueCard
          data={data}
          totalRecords={count}
          onPageChanged={this.onPageChanged}
          page={Number(page)}
        />
        <Footer cvUrl="https://comicvine.gamespot.com/" />
      </React.Fragment>
    ) : null;
  }
}

ArcDetail.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
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
  count: state.fetch.count,
  page: state.fetch.page,
  error: state.fetch.error,
});

export default connect(
  mapStateToProps,
  { fetchArcDetail },
)(ArcDetail);
