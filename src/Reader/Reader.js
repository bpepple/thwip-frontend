import React from "react";
import ComicPageProvider from "./ComicPageProvider";
import ReaderCarousel from "./ReaderCarousel";

const Reader = props => (
  <ComicPageProvider
    endpoint={
      "http://127.0.0.1:8000/api/issue/" +
      props.match.params.slug +
      "/get-page/"
    }
    pages={props.match.params.pages}
    render={data => <ReaderCarousel data={data} />}
  />
);

export default Reader;
