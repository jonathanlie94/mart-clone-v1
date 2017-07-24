import React from 'react';
import PropTypes from 'prop-types';
import theme from 'ui/theme';
import StyledButton from './StyledButton';

const Button = props => (
  <StyledButton
    className={props.className}
    color={props.color}
    disabled={props.disabled}
    backgroundColor={props.backgroundColor}
    onClick={props.disabled ? null : props.onClick || null}
  >
    {props.children}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  children: false,
  color: theme.colors.white,
  backgroundColor: theme.colors.primary,
  disabled: false,
  primary: false,
};

export default Button;
