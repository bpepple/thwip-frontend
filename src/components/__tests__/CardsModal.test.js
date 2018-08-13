import React from 'react';
import { mount } from 'enzyme';
import CardsModal from './CardsModal';

describe('CardsModal', () => {
  let props;
  let mountedCardsModal;

  const cardsModal = () => {
    if (!mountedCardsModal) {
      mountedCardsModal = mount(<CardsModal {...props} />);
    }
    return mountedCardsModal;
  };

  beforeEach(() => {
    props = {
      modal: true,
      data: {
        __str__: '52 #001',
        slug: '52-001-2006',
        cvurl:
          'https://comicvine.gamespot.com/52-1-golden-lads-lasses-must/4000-105733/',
        series: '52',
        name: 'Golden Lads & Lasses Must...',
        number: '001',
        date: '2006-05-10',
        leaf: 0,
        page_count: 24,
        percent_read: 100,
        status: 2,
        desc: 'After the INFINITE CRISIS and before One Year Later.',
        image:
          'http://127.0.0.1:8000/media/images/issues/6ad10fb8-6106-4d06-b0b4-0aed825e145f.jpg'
      },
      creators: {
        credits: [
          {
            creator: 'Alex Sinclair',
            role: [{ name: 'Colorist' }, { name: 'Cover' }]
          },
          { creator: 'Dan DiDio', role: [{ name: 'Editor' }] },
          { creator: 'Geoff Johns', role: [{ name: 'Writer' }] },
          { creator: 'Grant Morrison', role: [{ name: 'Writer' }] },
          { creator: 'Greg Rucka', role: [{ name: 'Writer' }] },
          { creator: 'Harvey Richards', role: [{ name: 'Editor' }] },
          { creator: 'Jann (Jones) Robinson', role: [{ name: 'Editor' }] },
          { creator: 'J.G. Jones', role: [{ name: 'Cover' }] },
          { creator: 'Joe Bennett', role: [{ name: 'Penciler' }] },
          { creator: 'Keith Giffen', role: [{ name: 'Penciler' }] },
          { creator: 'Mark Waid', role: [{ name: 'Writer' }] },
          { creator: 'Nick J. Napolitano', role: [{ name: 'Letterer' }] },
          { creator: 'Ruy Jose', role: [{ name: 'Inker' }] },
          { creator: 'Stephen Wacker', role: [{ name: 'Editor' }] }
        ]
      }
    };
    mountedCardsModal = undefined;
  });

  describe('rendered `CardsModal`', () => {
    it('contains everything else that gets rendered', () => {
      const c = cardsModal().find('Modal');
      expect(c.length).toBeGreaterThan(0);
    });
    it('always renders a `ModalHeader`', () => {
      expect(cardsModal().find('ModalHeader').length).toBe(1);
    });
    it('`ModalHeader` renders text correctly', () => {
      expect(
        cardsModal()
          .find('ModalHeader')
          .text()
      ).toEqual(props.data.__str__);
    });
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
  });
});
