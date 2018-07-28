import React from 'react';
import DataProvider from './DataProvider';
import SeriesCard from './SeriesCard';

const PublisherDetail = props => (
  <DataProvider
    endpoint={
      process.env.REACT_APP_API_URL +
      '/api/publisher/' +
      props.match.params.slug +
      '/series_list/'
    }
    render={data => <SeriesCard data={data} />}
  />
);

export default PublisherDetail;
