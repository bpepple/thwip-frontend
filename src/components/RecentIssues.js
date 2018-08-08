import React from 'react';
import IssuePage from './IssuePage';

const RecentIssues = props => (
  <IssuePage
    endpoint={process.env.REACT_APP_API_URL + '/api/issue/recent/'}
    page={props.match.params.page}
  />
);

export default RecentIssues;
