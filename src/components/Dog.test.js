import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Dog name="Rover" age={12} weight="22 lbs" />);
    expect(wrapper).toMatchSnapshot();
  });
});
