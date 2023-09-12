import styled from 'styled-components'

export const StyledMainWrapper = styled.div`
   background-color:rgb(121, 122, 150, 0.8) ;
   display: flex;
   justify-content: center;
   height: 70vh ;
`
export const StyledMainContainer = styled.div`
   display: flex;
   background-color: #FEFCF7;
   width: 90%;
   max-width: 700px;
   min-width: 480px;
   padding: 3em;
   border-radius: 6px;
   position: absolute;
   height: 70vh;
   top: 350px;
   `
   export const StyledWordInfo = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      
      
      && > div{
         border-bottom: 1px solid #2e3d53;
         position: relative;
         width: 100%;
         padding: 1em 0 1em 0;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         
      }
      `
export const StyledWordItem = styled.div`
   display: flex;
   align-items: center;
   ul{
      display: flex;
      flex-direction: row;
   }
   li {
      display: flex;
      margin: 4px;
   }
   
   h3{
      font-size: 1.5em;
   }
    div > *{
      margin: 2px
   }

   div{
      display: flex;
      align-items: flex-end;
   }
    div > h3{
      display: flex;
      align-items: flex-end;
   }
   button{
      background-color: #FEFCF7;
      color: orange;
      cursor: pointer;
      border: none;
   }

   button:hover{
      color: rgb(255, 165, 7, 0.7);

   }
   svg{
      color: #ff891a;
      font-size: 1.3em;
   }
   svg:hover{
      color: rgb(255, 137, 26, 0.6);
      cursor: pointer;
   }
`