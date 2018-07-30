import React from 'react';
import IssuePage from './IssuePage';

const SeriesDetail = props => (
  <IssuePage
    endpoint={
      process.env.REACT_APP_API_URL +
      '/api/series/' +
      props.match.params.slug +
      '/issue_list/'
    }
  />
);

export default SeriesDetail;
