import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
`;

export default GlobalStyle;
