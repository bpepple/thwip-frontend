import React from 'react';
import { shallow } from 'enzyme';
import CreatorImage from '../CreatorImage';
import noImage from '../../img/creator-not-found.png';

describe('CreatorImage', () => {
  it('render the missingImg', () => {
    const cardimg = shallow(<CreatorImage src={null} />);

    expect(cardimg.find('Media').prop('src')).toEqual(noImage);
  });
});
