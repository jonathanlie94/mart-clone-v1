import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import MainContainer from '../';

test('should render children when passed in', () => {
  const renderedComponent = shallow(
    <MainContainer>
      <div className="unique-class-name" />
    </MainContainer>
  );
  expect(
    renderedComponent.contains(<div className="unique-class-name" />)
  ).toEqual(true);
});

test('should match previous snapshot', () => {
  const listItem = shallow(<MainContainer />).dive();
  const tree = toJSON(listItem);
  expect(tree).toMatchStyledComponentsSnapshot();
});
