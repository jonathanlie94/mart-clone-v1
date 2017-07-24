import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import InputText from '../';

test('should handle change correctly', () => {
  let val = 'B';
  const onChange = (v) => {
    val = v;
  };
  const renderedComponent = mount(
    <InputText onChange={onChange} value={val} />
    );
  renderedComponent
      .find('input')
      .simulate('change', { target: { value: 'BA' } });

  expect(val).toEqual('BA');
});

test('should match previous snapshot', () => {
  const renderedComponent = mount(<InputText onChange={() => {}} value="val" />);
  const tree = toJSON(renderedComponent);
  expect(tree).toMatchStyledComponentsSnapshot();
});
