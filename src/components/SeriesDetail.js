import React from 'react';
import DataProvider from './DataProvider';
import IssueCard from './IssueCard';

const SeriesDetail = props => (
  <DataProvider
    endpoint={
      process.env.REACT_APP_API_URL +
      '/api/series/' +
      props.match.params.slug +
      '/issue_list/'
    }
    render={data => <IssueCard data={data} />}
  />
);

export default SeriesDetail;
