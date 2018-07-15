import React from "react";
import DataProvider from "./DataProvider";
import SeriesCard from "./SeriesCard";
import Header from "./Header";

const SeriesList = () => (
  <div>
    <Header />
    <DataProvider
      endpoint="http://127.0.0.1:8000/api/series/"
      render={data => <SeriesCard data={data} />}
    />
  </div>
);

export default SeriesList;
