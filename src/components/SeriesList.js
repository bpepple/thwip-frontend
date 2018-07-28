import React from 'react';
import DataProvider from './DataProvider';
import SeriesCard from './SeriesCard';

const SeriesList = () => (
  <DataProvider
    endpoint={process.env.REACT_APP_API_URL + '/api/series'}
    render={data => <SeriesCard data={data} />}
  />
);

export default SeriesList;
