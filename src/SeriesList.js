import React from "react";
import DataProvider from "./DataProvider";
import SeriesListCard from "./SeriesListCard";

const SeriesList = () => (
  <DataProvider
    endpoint="http://127.0.0.1:8000/api/series/"
    render={data => <SeriesListCard data={data} />}
  />
);

export default SeriesList;
