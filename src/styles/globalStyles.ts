import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", serif;
}

body {
    font-family: "Inter", serif;
    background-color: ${colors.background};
    color: ${colors.text.body};
    line-height: 1.6;
    max-width: 100vw;
  }

  ::-webkit-scrollbar {
  width: 6px; 
  height: 6px; 
}

::-webkit-scrollbar-thumb {
  background-color: ${colors.border};
  border-radius: 10px; 
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05); 
  border-radius: 10px;
}

::-webkit-scrollbar-corner {
  background: transparent; 
}
`