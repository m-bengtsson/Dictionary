import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
   margin:0;
   padding: 0;
   box-sizing: border-box;
}

body {
  margin: 0;
   font-family: "Poppins" ;
  letter-spacing: 20%;
  font-weight: 400;
  color: #2e3d53;
  background-color: #a6a5b2;
}

`

export default GlobalStyles;