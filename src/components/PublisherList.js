import React from 'react';
import PublisherPage from './PublisherPage';

const Publisher = props => (
  <PublisherPage
    endpoint={process.env.REACT_APP_API_URL + '/api/publisher/'}
    page={props.match.params.page}
  />
);

export default Publisher;
