import React from 'react';
import DataProvider from './DataProvider';
import PublisherCard from './PublisherCard';
import Header from './Header';

const Publisher = () => (
  <React.Fragment>
    <Header />
    <DataProvider
      endpoint={process.env.REACT_APP_API_URL + '/api/publisher/'}
      render={data => <PublisherCard data={data} />}
    />
  </React.Fragment>
);

export default Publisher;
