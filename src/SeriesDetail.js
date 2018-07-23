import React from 'react';
import DataProvider from './DataProvider';
import IssueCard from './IssueCard';
import MainBar from './MainBar';

const SeriesDetail = props => (
  <React.Fragment>
    <MainBar />
    <DataProvider
      endpoint={
        process.env.REACT_APP_API_URL +
        '/api/series/' +
        props.match.params.slug +
        '/issue_list/'
      }
      render={data => <IssueCard data={data} />}
    />
  </React.Fragment>
);

export default SeriesDetail;
