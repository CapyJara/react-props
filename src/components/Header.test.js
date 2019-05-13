import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
