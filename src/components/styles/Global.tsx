import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
   margin:0;
   padding: 0;
   box-sizing: border-box;
},

body {
  margin: 0;
  font-family: "Arimo" ;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: #2e3d53;
  background-color: #FEFCF7;
  font-size: 14px
}

.border-bottom{
   border-bottom: 1px solid #485062
}

h2{
   font-size: 2em;
}

h3{
   font-size: 1.5em;
}


`

export default GlobalStyles;