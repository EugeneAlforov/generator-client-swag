import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { MyComponent } from './my-component.jsx';

describe('MyComponent Component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).to.have.length(1);
  });
});
