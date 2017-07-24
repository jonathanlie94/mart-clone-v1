import styled from 'styled-components';

export default styled.button`
  height: auto;
  text-align: center;
  outline-width: 0;
  border-color: transparent;
  border-radius: 2px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  &:focus:not([disabled]),
  :hover:not([disabled]) {
    opacity: .625;
  }
  &:disabled {
    opacity: .25;
  }
  transition: .1s ease;
`;
