import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
   margin:0;
   padding: 0;
   box-sizing: border-box;
},

body {
  margin: 0;
  font-family: "Poppins" ;
  letter-spacing: 10%;
  font-weight: 400;
  color: #2e3d53;
  background-color: #E2DED2;
}

`

export default GlobalStyles;