import { injectGlobal } from 'styled-components';
import theme from './theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    font-family: Arial, sans-serif;
  }

  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
    color: ${theme.colors.text};
    font-family: Arial, sans-serif;
  }

  a {
    color: inherit;
  }
`;
