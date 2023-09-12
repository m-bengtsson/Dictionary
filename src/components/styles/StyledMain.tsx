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
         width: 100%;
         padding: 1em 0 1em 0;
         display: flex;
         justify-content: center;
      }
   `
export const StyledWordItem = styled.div`
   display: flex;
   flex-direction: column;
   * {
      margin: 3px
   }

   div{
      display: flex;
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
`
