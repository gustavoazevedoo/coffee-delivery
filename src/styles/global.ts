import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Baloo 2', cursive;
    font-family: 'Roboto', sans-serif;
    max-width: 71rem;
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme['gray-100']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
