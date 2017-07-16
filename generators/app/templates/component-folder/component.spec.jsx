import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import <%= componentName %> from './<%= fileName %>.jsx';

chai.should();

describe('<%= componentName %> Component', () => {
    it('should render without exploding', () => {
        const wrapper = shallow(<<%= componentName %> />);
        expect(wrapper).to.have.length(1);
    });
});
