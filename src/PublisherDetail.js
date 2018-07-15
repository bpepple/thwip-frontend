import React from "react";
import DataProvider from "./DataProvider";
import SeriesCard from "./SeriesCard";
import Header from "./Header";

const PublisherDetail = props => (
  <React.Fragment>
    <Header />
    <DataProvider
      endpoint={
        "http://127.0.0.1:8000/api/publisher/" +
        props.match.params.slug +
        "/series_list/"
      }
      render={data => <SeriesCard data={data} />}
    />
  </React.Fragment>
);

export default PublisherDetail;
