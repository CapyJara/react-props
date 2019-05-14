import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Dog component', () => {
  it('renders a pink with all fields', () => {
    const wrapper = shallow(<App name="Pink" rgb={ { red: 255, green: 105, blue: 180 } } hex="ff69b4" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a pink without hex', () => {
    const wrapper = shallow(<App name="Pink" rgb={ { red: 255, green: 105, blue: 180 } } />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a pink without name', () => {
    const wrapper = shallow(<App rgb={ { red: 255, green: 105, blue: 180 } } />);
    expect(wrapper).toMatchSnapshot();
  });
});
