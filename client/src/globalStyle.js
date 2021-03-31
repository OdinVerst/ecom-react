import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 80px;
  }

  .reset-btn {
    font-size: 1rem;
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    border-radius: 0;
    cursor: pointer;
  }

  .button-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export default GlobalStyle;