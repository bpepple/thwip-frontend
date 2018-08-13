import React from 'react';
import { shallow } from 'enzyme';
import ReaderButtonGroup from '../reader/ReaderButtonGroup';

test('renders without crashing', () => {
  shallow(<ReaderButtonGroup />);
});
