import React from "react";
import DataProvider from "./DataProvider";
import PublisherListCard from "./PublisherListCard";
import Header from "./Header";

const Publisher = () => (
  <div>
    <Header />
    <DataProvider
      endpoint="http://127.0.0.1:8000/api/publisher/"
      render={data => <PublisherListCard data={data} />}
    />
  </div>
);

export default Publisher;
