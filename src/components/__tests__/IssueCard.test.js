import React from 'react';
import { mount } from 'enzyme';
import IssueCard from '../IssueCard';

describe('IssueCard', () => {
  let props;
  let mountedIssueCard;

  const issueCard = () => {
    if (!mountedIssueCard) {
      mountedIssueCard = mount(<IssueCard {...props} />);
    }
    return mountedIssueCard;
  };

  beforeEach(() => {
    props = {
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            __str__: 'Action Comics #681',
            slug: 'action-comics-681-1992',
            cvurl:
              'https://comicvine.gamespot.com/action-comics-681-odds-and-endings/4000-116434/',
            series: 'action-comics-1',
            name: 'Odds & ...Endings',
            number: '681',
            date: '1992-09-30',
            leaf: 0,
            page_count: 23,
            percent_read: 0,
            status: 0,
            desc:
              "S.T.A.R. Labs' Metropolis branch is being rebuilt, bringing about the return of Rampage.",
            image:
              'http://127.0.0.1:8000/media/images/issues/4231619f-d71b-47eb-81bc-cca328938e3e.jpg',
            credits: [
              {
                creator: 'Art Thibert',
                role: [
                  { name: 'Cover' },
                  { name: 'Inker' },
                  { name: 'Penciler' }
                ]
              },
              { creator: 'Bill Oakley', role: [{ name: 'Letterer' }] },
              { creator: 'Denis Rodier', role: [{ name: 'Inker' }] },
              {
                creator: 'Glenn Whitmore',
                role: [{ name: 'Colorist' }, { name: 'Cover' }]
              },
              { creator: 'Jackson Butch Guice', role: [{ name: 'Penciler' }] },
              { creator: 'Jennifer Frank', role: [{ name: 'Editor' }] },
              { creator: 'Mike Carlin', role: [{ name: 'Editor' }] },
              { creator: 'Roger Stern', role: [{ name: 'Writer' }] }
            ]
          }
        ]
      }
    };
    mountedIssueCard = undefined;
  });

  describe('rendered `IssueCard`', () => {
    it('contains everything else that gets rendered', () => {
      const c = issueCard().find('Container');
      expect(c.length).toBeGreaterThan(0);
    });
    it('always renders an `InfoButton`', () => {
      expect(issueCard().find('InfoButton').length).toBe(1);
    });
    it('always renders an `ReadButton`', () => {
      expect(issueCard().find('ReadButton').length).toBe(1);
    });
    it('always render the `Body`', () => {
      expect(issueCard().find('Body').length).toBe(1);
    });
  });
});
