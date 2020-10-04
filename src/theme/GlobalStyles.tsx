import {createGlobalStyle} from 'styled-components';
import {Theme} from 'src/models/theme';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({theme}: {theme: Theme}) => theme.body};
    color: ${({theme}: {theme: Theme}) => theme.text};
    height: 100vh;
    margin: 2%;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;

export default GlobalStyles;
