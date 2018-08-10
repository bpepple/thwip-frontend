import React from 'react';
import { mount } from 'enzyme';
import PublisherCard from './PublisherCard';

describe('PublisherCard', () => {
  let props;
  let mountedPublisherCard;

  const publisherCard = () => {
    if (!mountedPublisherCard) {
      mountedPublisherCard = mount(<PublisherCard {...props} />);
    }
    return mountedPublisherCard;
  };

  beforeEach(() => {
    props = {
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            slug: 'dc-comics',
            cvurl: 'https://comicvine.gamespot.com/dc-comics/4010-10/',
            name: 'DC Comics',
            desc:
              'DC is a publisher of comic books featuring iconic characters.',
            image:
              'http://127.0.0.1:8000/media/images/publishers/1efb47e0-fe10-4bee-afd7-c5adcf4ffd68.jpg',
            series_count: 45
          }
        ]
      }
    };
    mountedPublisherCard = undefined;
  });

  describe('rendered `PublisherCard`', () => {
    it('contains everything else that gets rendered', () => {
      const c = publisherCard().find('Container');
      expect(c.length).toBeGreaterThan(0);
    });
    it('always renders an `InfoButton`', () => {
      expect(publisherCard().find('InfoButton').length).toBe(1);
    });
    it('always renders an `OpenButton`', () => {
      expect(publisherCard().find('OpenButton').length).toBe(1);
    });
    it('always render the `Body`', () => {
      expect(publisherCard().find('Body').length).toBe(1);
    });
  });
});
