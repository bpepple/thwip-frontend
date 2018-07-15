import React from "react";
import DataProvider from "./DataProvider";
import PublisherCard from "./PublisherCard";
import Header from "./Header";

const Publisher = () => (
  <React.Fragment>
    <Header />
    <DataProvider
      endpoint="http://127.0.0.1:8000/api/publisher/"
      render={data => <PublisherCard data={data} />}
    />
  </React.Fragment>
);

export default Publisher;
