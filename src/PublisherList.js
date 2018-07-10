import React from "react";
import DataProvider from "./DataProvider";
import Cards from "./Cards";

const Publisher = () => (
  <DataProvider
    endpoint="http://127.0.0.1:8000/api/publisher/"
    render={data => <Cards data={data} />}
  />
);

export default Publisher;
