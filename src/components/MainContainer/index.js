import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const MainContainer = props => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

MainContainer.propTypes = {
  children: PropTypes.node,
};

MainContainer.defaultProps = {
  children: false,
};

export default MainContainer;
