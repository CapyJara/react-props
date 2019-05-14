import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('App component', () => {
  it('renders a App', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
