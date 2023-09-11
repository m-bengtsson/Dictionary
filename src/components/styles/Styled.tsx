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
   background-color: rgb(121, 122, 150, 0.7) ;
   padding: 1em;
   border-radius: 100px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 600px;
   *{
     // border: 1px dashed blue;
   }
   
   p{
      font-weight: 600;
      font-size: 14px;
   }

   div{
      background-color: #ffffff;
      border-radius: 100px;
      position: relative;
      display: flex;
      justify-content: space-around;
   }
   input{
      outline: none ;
      border: none;
      padding: 10px;
      border-radius: 100px;
      width: 330px;
      background-color: none;
      opacity: unset;
   }
   button{
      outline: none;
      cursor: pointer;
      border: none;
      border-radius: 100px;
      margin: 10px;
      background-color: white;
      color: #ffaa17;
      font-weight: 400;
   }
   button:hover{
      color: rgb(255, 170, 23, 0.6);
   }
   
`