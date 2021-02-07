import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
  *{
    font-family:'Noto sans', sans-serif;
  }
`;

export default GlobalStyle;
