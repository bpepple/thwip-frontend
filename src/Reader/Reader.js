import React from 'react';
import ComicPageProvider from './ComicPageProvider';
import ReaderCarousel from './ReaderCarousel';

const Reader = props => (
  <ComicPageProvider
    endpoint={
      process.env.REACT_APP_API_URL +
      '/api/issue/' +
      props.match.params.slug +
      '/get-page/'
    }
    pages={props.match.params.pages}
    render={data => <ReaderCarousel data={data} />}
  />
);

export default Reader;
