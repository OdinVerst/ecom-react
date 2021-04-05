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
  
  @media (max-width: 1024px) {
    body {
      padding: 5px;
    }
  }

  @media (max-width: 820px) {
    .button-group {
      justify-content: flex-start;
      gap: 1em;
    }
  }
`;

export default GlobalStyle;