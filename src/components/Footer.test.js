import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

test('renders without crashing', () => {
  shallow(<Footer cvUrl="https://comicvine.gamespot.com/" />);
});
