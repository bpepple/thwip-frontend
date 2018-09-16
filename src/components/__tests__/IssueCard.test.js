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
        entities: {
          credits: {
            '36698': {
              id: 36698,
              creator: 'Aaron Conley',
              image:
                'http://127.0.0.1:8000/media/images/creators/74422152-72b1-40a1-87e7-c45c45f77a8c.png',
              role: [
                {
                  id: 4,
                  name: 'Artist'
                },
                {
                  id: 5,
                  name: 'Cover'
                }
              ]
            },
            '36699': {
              id: 36699,
              creator: 'Carey Hall',
              image:
                'http://127.0.0.1:8000/media/images/creators/db60743b-2b23-4600-9561-a48e47a2eee9.png',
              role: [
                {
                  id: 10,
                  name: 'Other'
                }
              ]
            },
            '36700': {
              id: 36700,
              creator: 'Jean-Francois Beaulieu',
              image:
                'http://127.0.0.1:8000/media/images/creators/9fdbcb87-60a6-4d54-a8b7-522c9667bd66.jpg',
              role: [
                {
                  id: 3,
                  name: 'Colorist'
                }
              ]
            },
            '36701': {
              id: 36701,
              creator: 'Kent Wagenschutz',
              image:
                'http://127.0.0.1:8000/media/images/creators/21900c28-08e7-44d2-87d7-9c0f75eba48c.png',
              role: [
                {
                  id: 6,
                  name: 'Editor'
                }
              ]
            },
            '36702': {
              id: 36702,
              creator: 'Nate Piekos',
              image:
                'http://127.0.0.1:8000/media/images/creators/7c91a581-cc44-4c87-aa15-83542d7f3641.jpg',
              role: [
                {
                  id: 1,
                  name: 'Letterer'
                }
              ]
            },
            '36703': {
              id: 36703,
              creator: 'Scott O. Brown',
              image:
                'http://127.0.0.1:8000/media/images/creators/30004682-48fc-4747-bdc5-0e9b1f62bde2.png',
              role: [
                {
                  id: 5,
                  name: 'Cover'
                }
              ]
            },
            '36704': {
              id: 36704,
              creator: 'Skottie Young',
              image:
                'http://127.0.0.1:8000/media/images/creators/f39a4957-a494-40ab-81fb-e097cb7e5c2e.jpg',
              role: [
                {
                  id: 5,
                  name: 'Cover'
                },
                {
                  id: 2,
                  name: 'Writer'
                }
              ]
            }
          },
          issues: {
            '4945': {
              id: 4945,
              __str__: 'Bully Wars #001',
              slug: 'bully-wars-001-2018',
              cvurl: 'https://comicvine.gamespot.com/bully-wars-1/4000-683718/',
              series: 'bully-wars',
              name: 'None',
              number: '001',
              date: '2018-09-04',
              leaf: 0,
              page_count: 30,
              percent_read: 0,
              status: 0,
              desc:
                'I HATE FAIRYLAND and Deadpool writer SKOTTIE YOUNG and artist AARON CONLEY (Sabertooth Swordsman, Rocket Raccoon & Groot) team up for a hilarious all-new, all-ages ONGOING SERIES! Rufus, the biggest bully in Rottenville since kindergarten, suddenly goes from bully to bullied on the first day of high school. He’s forced to make a shaky pact with his favorite geeks: Spencer and his twin sibling besties, Edith and Ernie. Together they’ll have to find a way to survive the Hunger Games-like contest ',
              image:
                'http://127.0.0.1:8000/media/images/issues/af64e93d-0c1a-4491-ba2f-55f6a65d17e0.jpg',
              credits: [36698, 36699, 36700, 36701, 36702, 36703, 36704]
            }
          }
        },
        result: [4945]
      },
      page: '1',
      count: 1
    };
    mountedIssueCard = undefined;
  });

  describe('rendered `IssueCard`', () => {
    it('contains everything else that gets rendered', () => {
      const c = issueCard().find('Row');
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
