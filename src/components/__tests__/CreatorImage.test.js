import React from 'react';
import { shallow } from 'enzyme';
import CreatorImage from '../CreatorImage';
import missingImg from '../../img/image-not-found.png';

describe('CreatorImage', () => {
  it('render the missingImg', () => {
    const cardimg = shallow(<CreatorImage src={null} />);

    expect(cardimg.find('Media').prop('src')).toEqual(missingImg);
  });
});
