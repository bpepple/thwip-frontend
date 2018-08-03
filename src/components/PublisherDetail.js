import React from 'react';
import SeriesPage from './SeriesPage';

const PublisherDetail = props => (
  <SeriesPage
    endpoint={
      process.env.REACT_APP_API_URL +
      '/api/publisher/' +
      props.match.params.slug +
      '/series_list/'
    }
    page={props.match.params.page}
    slug={props.match.params.slug}
  />
);

export default PublisherDetail;
