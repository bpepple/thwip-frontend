import React from 'react';
import { shallow } from 'enzyme';
import ReaderButtonGroup from './ReaderButtonGroup';

test('renders without crashing', () => {
  shallow(<ReaderButtonGroup />);
});
