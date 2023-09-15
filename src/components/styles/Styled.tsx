import styled from 'styled-components'

export const TopContainer = styled.div`
   height: 80px;
   background-color: #FEFCF7;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;


   // Giving the bg image opacity by setting it as a pseudoelement
   &::before {
    content: '';
    background-image: url("../src/assets/idk.png");
    opacity: 0.5; 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

   width: 100%;
   height: 300px;
   background-size: cover;
   background-repeat: no-repeat;
  

   h1{
      font-family: "Abril Fatface";
      margin-bottom: 1em;
      letter-spacing: 3px;
      font-size: 2.5em;
   }
`

export const StyledInput = styled.div`
   background-color: rgb(93, 109, 143, 0.7) ;
   padding: 1em;
   border-radius: 100px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   max-width: 700px;
   min-width: 400px;
   
   p{
      font-weight: 600;
      font-size: 14px;
   }

   div{
      background-color: #ffffff;
      border-radius: 100px;
      position: inherit;
      display: flex;
      justify-content: space-around;
   }
   input{
      outline: none ;
      border: none;
      padding: 10px;
      border-radius: 100px;
      width: 100%;
      min-width: 170px;
      max-width: 400px;
      background-color: none;
      opacity: unset;
   }
   svg{
      outline: none;
      cursor: pointer;
      border: none;
      border-radius: 100px;
      margin: 8px;
      background-color: white;
      color: #ffaa17;
      font-size: 1.5em;
      transition: 0.2s;
   }
   svg:hover{
      color: rgb(255, 170, 23, 0.6);
   }
   
`