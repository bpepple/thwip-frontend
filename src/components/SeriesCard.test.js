import React from 'react';
import { mount } from 'enzyme';
import SeriesCard from './SeriesCard';

describe('SeriesCard', () => {
  let props;
  let mountedSeriesCard;

  const seriesCard = () => {
    if (!mountedSeriesCard) {
      mountedSeriesCard = mount(<SeriesCard {...props} />);
    }
    return mountedSeriesCard;
  };

  beforeEach(() => {
    props = {
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            slug: 'mad',
            cvurl: 'https://comicvine.gamespot.com/mad/4050-9318/',
            name: 'MAD',
            sort_title: 'MAD',
            publisher: 'dc-comics',
            year: 1952,
            desc:
              'MAD Magazine has been a staple of American pop culture since the first issue in 1952.',
            issue_count: 415,
            percent_read: 6,
            image:
              'http://127.0.0.1:8000/media/images/issues/2a70956e-cd41-4308-982a-f0507a56fc26.jpg'
          }
        ]
      }
    };
    mountedSeriesCard = undefined;
  });

  describe('rendered `SeriesCard`', () => {
    it('contains everything else that gets rendered', () => {
      const c = seriesCard().find('Container');
      expect(c.length).toBeGreaterThan(0);
    });
    it('always renders an `InfoButton`', () => {
      expect(seriesCard().find('InfoButton').length).toBe(1);
    });
    it('always renders an `OpenButton`', () => {
      expect(seriesCard().find('OpenButton').length).toBe(1);
    });
    it('always render the `Body`', () => {
      expect(seriesCard().find('Body').length).toBe(1);
    });
  });
});
