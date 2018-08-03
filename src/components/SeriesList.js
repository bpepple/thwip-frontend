import React from 'react';
import SeriesPage from './SeriesPage';

const SeriesList = props => (
  <SeriesPage
    endpoint={process.env.REACT_APP_API_URL + '/api/series'}
    page={props.match.params.page}
  />
);

export default SeriesList;
