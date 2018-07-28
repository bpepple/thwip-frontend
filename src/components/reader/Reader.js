import React from 'react';
import ComicPageProvider from './ComicPageProvider';
import ReaderCarousel from './ReaderCarousel';

const Reader = props => (
  <ComicPageProvider
    endpoint={
      process.env.REACT_APP_API_URL +
      '/api/issue/' +
      props.match.params.slug +
      '/'
    }
    render={({ data, leaf, slug }) => (
      <ReaderCarousel data={data} leaf={leaf} slug={slug} />
    )}
  />
);

export default Reader;
