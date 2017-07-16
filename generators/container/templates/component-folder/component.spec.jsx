import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import <%= componentName %> from './<%= fileName %>.jsx';

chai.should();

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('<%= componentName %> Component', () => {
    const store = mockStore({ });
    it('should render without exploding', () => {
        const wrapper = shallow(<<%= componentName %> />);
        expect(wrapper).to.have.length(1);
    });
});
