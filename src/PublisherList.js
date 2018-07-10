import React from "react";
import DataProvider from "./DataProvider";
import PublisherListCard from "./PublisherListCard";

const Publisher = () => (
  <DataProvider
    endpoint="http://127.0.0.1:8000/api/publisher/"
    render={data => <PublisherListCard data={data} />}
  />
);

export default Publisher;
