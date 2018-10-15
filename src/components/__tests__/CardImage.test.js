import React from 'react';
import { shallow } from 'enzyme';
import CardImage from '../CardImage';
import missingImg from '../../img/image-not-found.png';

describe('CardImage', () => {
  it('render the missingImg', () => {
    const cardimg = shallow(<CardImage src={null} />);

    expect(cardimg.find('CardImg').prop('src')).toEqual(missingImg);
  });
});
