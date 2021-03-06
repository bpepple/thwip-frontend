import React from 'react';
import { mount } from 'enzyme';
import ArcCard from '../ArcCard';

describe('ArcCard', () => {
  let props;
  let mountedArcCard;

  const arcCard = () => {
    if (!mountedArcCard) {
      mountedArcCard = mount(<ArcCard {...props} />);
    }
    return mountedArcCard;
  };

  beforeEach(() => {
    props = {
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            id: 11,
            name: '52',
            slug: '52',
            image: 'http://127.0.0.1:8000/media/images/arcs/test.jpg',
            issue_count: 56,
            percent_read: 100,
            desc: 'The Infinite Crisis has ended.'
          }
        ]
      },
      totalRecords: 1,
      onPageChanged: jest.fn(),
      page: 1
    };
    mountedArcCard = undefined;
  });

  describe('rendered `ArcCard`', () => {
    it('contains everything else that gets rendered', () => {
      const c = arcCard().find('Row');
      expect(c.length).toBeGreaterThan(0);
    });
    /*
    it('ListCardsModal is toggled', ()=> {
      arcCard().simulate('toggle')
      expect(arcCard().find('ListCardsModal').prop('modal')).toEqual(true);
    })
    */
    it('always renders an `InfoButton`', () => {
      expect(arcCard().find('InfoButton').length).toBe(1);
    });
    it('modal is initially closed', () => {
      expect(
        arcCard()
          .find('ListCardsModal')
          .prop('modal')
      ).toEqual(false);
    });
    it('open modal when `InfoButton` is clicked', () => {
      arcCard()
        .find('InfoButton')
        .simulate('click');
      expect(
        arcCard()
          .find('ListCardsModal')
          .prop('modal')
      ).toEqual(true);
    });
    it('always renders an `OpenButton`', () => {
      expect(arcCard().find('OpenButton').length).toBe(1);
    });
    it('always render the `SeriesCardBody`', () => {
      expect(arcCard().find('SeriesCardBody').length).toBe(1);
    });
  });
});
