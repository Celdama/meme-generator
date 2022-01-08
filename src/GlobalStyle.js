import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --mainGradient: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
    --white: #fff;
  }

  * {
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
