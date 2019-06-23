import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArcList } from '../actions';
import ArcCard from '../components/ArcCard';
import Footer from '../components/Footer';

class ArcList extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.fetchArcList(page);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  onPageChanged = (pageData) => {
    const { currentPage } = pageData;
    const { page } = this.props;

    /* Don't fetch the page twice. */
    if (currentPage === Number(page) || currentPage === 0) {
      return;
    }

    this.props.fetchArcList(currentPage);
  };

  render() {
    const { data, loaded, page, error } = this.props;

    if (error) {
      return <h2 className="text-danger text-center">Error: {error}</h2>;
    }

    return loaded ? (
      <React.Fragment>
        <ArcCard
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

ArcList.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
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
  { fetchArcList },
)(ArcList);
