import React from 'react';
import DataProvider from './DataProvider';
import PublisherCard from './PublisherCard';

const Publisher = () => (
  <DataProvider
    endpoint={process.env.REACT_APP_API_URL + '/api/publisher/'}
    render={data => <PublisherCard data={data} />}
  />
);

export default Publisher;
