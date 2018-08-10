import React from 'react';
import { shallow } from 'enzyme';
import PublisherList from './PublisherList';

test('it renders', () => {
  shallow(
    <PublisherList
      endpoint="http://127.0.0.1/api/publisher/"
      match={{ params: { page: '2' }, isExact: false, path: '', url: '' }}
    />
  );
});
