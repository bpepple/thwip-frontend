import React from 'react';
import DataProvider from './DataProvider';
import SeriesCard from './SeriesCard';
import Header from './Header';

const SeriesList = () => (
  <React.Fragment>
    <Header />
    <DataProvider
      endpoint={process.env.REACT_APP_API_URL + '/api/series'}
      render={data => <SeriesCard data={data} />}
    />
  </React.Fragment>
);

export default SeriesList;
