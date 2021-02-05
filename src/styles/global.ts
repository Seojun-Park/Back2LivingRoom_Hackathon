import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*, *::before, *::after {
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif; 
  }
`;

export default GlobalStyle;
