import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
