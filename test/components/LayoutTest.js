import React from 'react';
import { shallow } from 'enzyme';
import Layout from 'components/Layout.js';

describe('<Layout />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Layout />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "layout-component"', function () {
      expect(component.hasClass('layout-component')).to.equal(true);
    });
  });
});
