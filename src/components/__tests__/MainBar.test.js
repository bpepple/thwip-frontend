import React from 'react';
import { mount, shallow } from 'enzyme';
import MainBar from '../MainBar';

test('renders without crashing', () => {
  shallow(<MainBar />);
});
