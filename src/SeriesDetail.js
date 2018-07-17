import React from 'react';
import DataProvider from './DataProvider';
import IssueCard from './IssueCard';
import Header from './Header';

const SeriesDetail = props => (
  <React.Fragment>
    <Header />
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
