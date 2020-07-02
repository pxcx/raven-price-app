import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    background: #f5f5f5;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
  }

`;