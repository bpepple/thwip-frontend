import React from 'react';
import { mount } from 'enzyme';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  let mountedSearchInput;

  const searchInput = () => {
    if (!mountedSearchInput) {
      mountedSearchInput = mount(<SearchInput />);
    }
    return mountedSearchInput;
  };

  beforeEach(() => {
    mountedSearchInput = undefined;
  });

  describe('render SearchInput', () => {
    it('contains everything else that gets rendered', () => {
      const c = searchInput().find('Form');
      expect(c.length).toBeGreaterThan(0);
    });
    it('Form submit...', () => {
      searchInput()
        .find('Form')
        .simulate('submit', { preventDefault: jest.fn() });
    });
  });
});
