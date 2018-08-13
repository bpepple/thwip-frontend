import React from 'react';
import { shallow } from 'enzyme';
import SeriesDetail from '../SeriesDetail';

test('it renders', () => {
  shallow(
    <SeriesDetail
      endpoint="http://127.0.0.1/api/series/52/issue_list/"
      match={{
        params: { page: '2', slug: '52' },
        isExact: false,
        path: '',
        url: ''
      }}
    />
  );
});
