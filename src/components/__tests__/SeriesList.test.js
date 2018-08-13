import React from 'react';
import { shallow } from 'enzyme';
import SeriesList from '../SeriesList';

test('it renders', () => {
  shallow(
    <SeriesList
      endpoint="http://127.0.0.1/api/series/"
      match={{ params: { page: '2' }, isExact: false, path: '', url: '' }}
    />
  );
});
