import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SearchCity from './SearchCity';

describe('SearchCity', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SearchCity debug />);

    expect(component).toMatchSnapshot();
  });
});
