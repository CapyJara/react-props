import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Dog component', () => {
  it('renders a pink with all fields', () => {
    const wrapper = shallow(<Color name="Pink" rgb={ { red: 255, green: 105, blue: 180 } } hex="ff69b4" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a pink without hex', () => {
    const wrapper = shallow(<Color name="Pink" rgb={ { red: 255, green: 105, blue: 180 } } />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a pink without name or hex', () => {
    const wrapper = shallow(<Color rgb={ { red: 255, green: 105, blue: 180 } } />);
    expect(wrapper).toMatchSnapshot();
  });
});
