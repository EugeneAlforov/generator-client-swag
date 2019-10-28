import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import <%= componentName %> from './<%= fileName %>.jsx';

describe('<%= componentName %> Component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<<%= componentName %> />);
    expect(wrapper).to.have.length(1);
  });

});
