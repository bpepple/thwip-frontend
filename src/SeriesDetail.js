import React from "react";
import DataProvider from "./DataProvider";
import IssueListCard from "./IssueListCard";
import Header from "./Header";

const SeriesDetail = props => (
  <div>
    <Header />
    <DataProvider
      endpoint={
        "http://127.0.0.1:8000/api/series/" +
        props.match.params.slug +
        "/issue_list/"
      }
      render={data => <IssueListCard data={data} />}
    />
  </div>
);

export default SeriesDetail;
