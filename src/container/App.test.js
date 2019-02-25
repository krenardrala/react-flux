import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from './Home';
import Weather from './Weather';

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('Weather', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Weather debug />);

    expect(component).toMatchSnapshot();
  });
});

it('should render correctly with no props', () => {
  const component = shallow(<Home/>);

  expect(component).toMatchSnapshot();
});

it('should render correctly with no props', () => {
  const component = shallow(<Weather/>);

  expect(component).toMatchSnapshot();
});

it('should be possible to activate button with Spacebar', () => {
  const component = mount(<Weather />);
  component
    .find('button')
    .simulate('keydown', { keyCode: 32 });
  expect(component).toMatchSnapshot();
  component.unmount();
});
