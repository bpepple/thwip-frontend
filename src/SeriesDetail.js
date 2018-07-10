import React from "react";
import DataProvider from "./DataProvider";
import SeriesDetailCard from "./SeriesDetailCard";

const SeriesDetail = props => (
  <DataProvider
    endpoint={
      "http://127.0.0.1:8000/api/series/" +
      props.match.params.slug +
      "/issue_list/"
    }
    render={data => <SeriesDetailCard data={data} />}
  />
);

export default SeriesDetail;
