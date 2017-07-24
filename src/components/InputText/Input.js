import styled from 'styled-components';
import theme from 'ui/theme';

export default styled.input.attrs({
  type: 'text',
})`
  font-family: Arial, sans-serif;
  border-radius: 4px;
  padding: 0.25rem;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.error ? theme.colors.yellow : theme.colors.grey};
  background-color: ${theme.colors.white};
  outline-color: ${theme.colors.blue};
  outline-width: 4px;
`;
