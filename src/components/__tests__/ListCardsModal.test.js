import React from 'react';
import { mount } from 'enzyme';
import ListCardsModal from '../ListCardsModal';

describe('ListCardsModal', () => {
  let props;
  let mountedListCardsModal;

  const cardsModal = () => {
    if (!mountedListCardsModal) {
      mountedListCardsModal = mount(<ListCardsModal {...props} />);
    }
    return mountedListCardsModal;
  };

  beforeEach(() => {
    props = {
      toggle: jest.fn(),
      modal: true,
      data: {
        slug: 'the-wrong-earth',
        cvurl: 'https://comicvine.gamespot.com/the-wrong-earth/4050-113523/',
        name: 'The Wrong Earth',
        sort_title: 'Wrong Earth, The',
        publisher: 'ahoy-comics',
        year: 2018,
        desc: 'Mini-series.',
        issue_count: 1,
        percent_read: 0,
        image:
          'http://127.0.0.1:8000/media/images/issues/8c5df859-e11a-4f3d-ac82-84696a08cc23.jpg'
      }
    };
    mountedListCardsModal = undefined;
  });

  describe('rendered `ListCardsModal`', () => {
    it('contains everything else that gets rendered', () => {
      const c = cardsModal().find('Modal');
      expect(c.length).toBeGreaterThan(0);
    });
    it('always renders a `ModalHeader`', () => {
      expect(cardsModal().find('ModalHeader').length).toBe(1);
    });
    // TODO: Test the ModalHeader title
    /*it("`ModalHeader` renders text correctly", () => {
      expect(
        cardsModal()
          .find("ModalHeader")
          .text()
      ).toEqual(props.data.name);
    });
    */
    it('always renders a `ModalBody`', () => {
      expect(cardsModal().find('ModalBody').length).toBe(1);
    });
    it('always renders a `ModalFooter`', () => {
      expect(cardsModal().find('ModalFooter').length).toBe(1);
    });
    describe('rendered `ModalYear`', () => {
      it('check for `ModalYear`', () => {
        expect(cardsModal().find('ModalYear').length).toBe(1);
      });
      it('received props', () => {
        const m = cardsModal().find('ModalYear');
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
