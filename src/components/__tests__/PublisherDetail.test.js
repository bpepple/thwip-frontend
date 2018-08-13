import React from 'react';
import { shallow } from 'enzyme';
import PublisherDetail from '../PublisherDetail';

test('it renders', () => {
  shallow(
    <PublisherDetail
      endpoint="http://127.0.0.1/api/publisher/marvel/series_list/"
      match={{
        params: { page: '2', slug: 'marvel' },
        isExact: false,
        path: '',
        url: ''
      }}
    />
  );
});
