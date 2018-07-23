import React from 'react';
import DataProvider from './DataProvider';
import SeriesCard from './SeriesCard';
import MainBar from './MainBar';

const SeriesList = () => (
  <React.Fragment>
    <MainBar />
    <DataProvider
      endpoint={process.env.REACT_APP_API_URL + '/api/series'}
      render={data => <SeriesCard data={data} />}
    />
  </React.Fragment>
);

export default SeriesList;
