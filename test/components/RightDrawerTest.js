import React from 'react';
import { shallow } from 'enzyme';
import RightDrawer from 'components/RightDrawer.js';

describe('<RightDrawer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<RightDrawer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "rightdrawer-component"', function () {
      expect(component.hasClass('rightdrawer-component')).to.equal(true);
    });
  });
});
