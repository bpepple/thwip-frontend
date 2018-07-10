import React from "react";
import DataProvider from "./DataProvider";
import Cards from "./Cards";

const Series = () => (
  <DataProvider
    endpoint="http://127.0.0.1:8000/api/series/"
    render={data => <Cards data={data} />}
  />
);

export default Series;
