import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    body {
      height: 100vh;
      background: ${({theme}) => theme.primary};
      color: ${({theme}) => theme.textColor};
      font-family: 'Roboto', sans-serif;
      transition: all .25s linear;
      padding: 0;
      margin: 0;
    }
`
