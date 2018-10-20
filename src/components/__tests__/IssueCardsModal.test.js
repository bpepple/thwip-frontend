import React from 'react';
import { mount } from 'enzyme';
import IssueCardsModal from '../IssueCardsModal';

describe('IssueCardsModal', () => {
  let props;
  let mountedIssueCardsModal;

  const cardsModal = () => {
    if (!mountedIssueCardsModal) {
      mountedIssueCardsModal = mount(<IssueCardsModal {...props} />);
    }
    return mountedIssueCardsModal;
  };

  beforeEach(() => {
    props = {
      toggle: jest.fn(),
      modal: true,
      roles: {
        '1': {
          id: 1,
          name: 'Letterer'
        },
        '2': {
          id: 2,
          name: 'Writer'
        },
        '3': {
          id: 3,
          name: 'Colorist'
        },
        '4': {
          id: 4,
          name: 'Artist'
        },
        '5': {
          id: 5,
          name: 'Cover'
        }
      },
      credits: [
        {
          id: 38778,
          creator: 'Aaron Lopresti',
          image:
            'http://127.0.0.1:8000/media/images/creators/9fd16553-7b41-4464-88d4-17fce074e021.jpg',
          role: [5]
        },
        {
          id: 38779,
          creator: 'Brian Augustyn',
          image:
            'http://127.0.0.1:8000/media/images/creators/7117a02e-d7e7-4f91-a34e-42a359bace88.jpg',
          role: [2]
        },
        {
          id: 38780,
          creator: 'Dave Johnson',
          image:
            'http://127.0.0.1:8000/media/images/creators/fc16ef64-24ca-40bd-abea-9291edb1c950.jpg',
          role: [5]
        },
        {
          id: 38781,
          creator: 'Francesco Francavilla',
          image:
            'http://127.0.0.1:8000/media/images/creators/b6a8ad6b-ead4-41d9-aa8c-b8bce2795ecc.jpg',
          role: [5]
        },
        {
          id: 38782,
          creator: 'Jack Morelli',
          image:
            'http://127.0.0.1:8000/media/images/creators/4d973e14-a418-4aeb-9436-81b575ebee60.jpg',
          role: [1]
        },
        {
          id: 38783,
          creator: 'Kelly Fitzpatrick',
          image:
            'http://127.0.0.1:8000/media/images/creators/aa310334-d1bf-4873-820e-4d8ac88aefbf.jpg',
          role: [3]
        },
        {
          id: 38784,
          creator: 'Mark Waid',
          image:
            'http://127.0.0.1:8000/media/images/creators/44493e0d-3e17-4722-ba9b-a130cc30591f.jpg',
          role: [2]
        },
        {
          id: 38785,
          creator: 'Peter Krause',
          image:
            'http://127.0.0.1:8000/media/images/creators/ac358a0c-975e-4388-9315-bfdff91cf525.jpg',
          role: [4, 5]
        },
        {
          id: 38786,
          creator: 'Sanya Anwar',
          image:
            'http://127.0.0.1:8000/media/images/creators/4127b26b-0e5d-4400-96b8-f237daa69a93.png',
          role: [5]
        }
      ],
      issue: {
        id: 5162,
        __str__: 'Archie: 1941 #001',
        slug: 'archie-1941-001-2018',
        cvurl:
          'https://comicvine.gamespot.com/archie-1941-1-chapter-one-the-last-summer/4000-684934/',
        series: 'archie-1941',
        name: 'Chapter One: The Last Summer',
        number: '001',
        date: '2018-11-01',
        leaf: 9,
        page_count: 26,
        percent_read: 38,
        status: 1,
        desc:
          "THE HISTORIC, GROUND-BREAKING MINI-SERIES STARTS HERE! Archie has been around for over 75 years and has been through many significant moments in time, but never before have we seen the characters take on real-world events as they unfold. WWII is looming and Archie and many young men from Riverdale are close to enlistment age. If you're a Riverdale teen, how would you cope with a looming world-changing event? Join the writing team of MARK WAID and BRIAN AUGUSTYN along with artist PETER KRAUSE fo",
        image:
          'http://127.0.0.1:8000/media/images/issues/78166dd2-7d41-489d-b0ee-0d3cdf23f12e.jpg',
        arcs: [18, 19],
        credits: [38778, 38779, 38780, 38781, 38782, 38783, 38784, 38785, 38786]
      },
      arcs: [
        {
          id: 18,
          name: 'Infinity Wars'
        },
        { id: 19, name: 'Fake Arc' }
      ]
    };
    mountedIssueCardsModal = undefined;
  });

  describe('rendered `IssueCardsModal`', () => {
    it('contains everything else that gets rendered', () => {
      const c = cardsModal().find('Modal');
      expect(c.length).toBeGreaterThan(0);
    });
    it('always renders a `ModalHeader`', () => {
      expect(cardsModal().find('ModalHeader').length).toBe(1);
    });
    // TODO: Test the ModalHeader title
    /*
    it("`ModalHeader` renders text correctly", () => {
      expect(
        cardsModal()
          .find("ModalHeader")
          .text()
      ).toEqual(props.issue.__str__);
    });
    */
    it('always renders a `ModalBody`', () => {
      expect(cardsModal().find('ModalBody').length).toBe(1);
    });
    it('always renders a `ModalFooter`', () => {
      expect(cardsModal().find('ModalFooter').length).toBe(1);
    });
    describe('rendered `ModalDate`', () => {
      it('check for `ModalDate`', () => {
        expect(cardsModal().find('ModalDate').length).toBe(1);
      });
      it('received props', () => {
        const m = cardsModal().find('ModalDate');
        expect(Object.keys(m.props()).length).toBe(1);
      });
    });
    describe('rendered `ModalSummary`', () => {
      it('check for `ModalSummary`', () => {
        expect(cardsModal().find('ModalSummary').length).toBe(1);
      });
      it('received props', () => {
        const m = cardsModal().find('ModalSummary');
        expect(Object.keys(m.props()).length).toBe(1);
      });
    });
    describe('renderd `ModalCredits`', () => {
      it('check for `ModalCredits`', () => {
        expect(cardsModal().find('ModalCredits').length).toBe(1);
      });
      it('received props', () => {
        const m = cardsModal().find('ModalCredits');
        /* There should be two props passed (credits, roles) */
        expect(Object.keys(m.props()).length).toBe(2);
      });
    });
  });
});
