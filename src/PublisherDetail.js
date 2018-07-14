import React from "react";
import DataProvider from "./DataProvider";
import SeriesListCard from "./SeriesListCard";
import Header from "./Header";

const PublisherDetail = props => (
  <div>
    <Header />
    <DataProvider
      endpoint={
        "http://127.0.0.1:8000/api/publisher/" +
        props.match.params.slug +
        "/series_list/"
      }
      render={data => <SeriesListCard data={data} />}
    />
  </div>
);

export default PublisherDetail;
