/*
  An input textarea component, used in our create topic page.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'ui/theme';
import { isEmptyString } from 'utils/helpers';
import Input from './Input';

const ErrorMessage = styled.div`
  color: ${theme.colors.red};
  margin-top: ${theme.margins.small};
`;

class InputText extends PureComponent {
  render() {
    return (
      <div >
        <Input
          className={this.props.className}
          onBlur={this.props.onBlur}
          onChange={e => this.props.onChange(e.target.value)}
          value={this.props.value}
        />
        {isEmptyString(this.props.error) ? false :
        <ErrorMessage>
          {this.props.error}
        </ErrorMessage>
        }
      </div>
    );
  }
}

InputText.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

InputText.defaultProps = {
  className: '',
  error: '',
  onBlur: () => {},
};

export default InputText;
