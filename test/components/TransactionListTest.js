import React from 'react';
import { shallow } from 'enzyme';
import TransactionList from 'components/TransactionList.js';

describe('<TransactionList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<TransactionList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "transactionlist-component"', function () {
      expect(component.hasClass('transactionlist-component')).to.equal(true);
    });
  });
});
