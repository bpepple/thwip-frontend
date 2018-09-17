import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';
import cvLogo from '../../img/comicvine_logo.png';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer cvUrl="https://comicvine.gamespot.com/" />);
  });
  it('renders the image', () => {
    const footer = shallow(<Footer cvUrl="https://comicvine.gamespot.com/" />);
    expect(footer.find('img').prop('src')).toEqual(cvLogo);
  });
});
