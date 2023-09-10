import styled from 'styled-components'

export const TopContainer = styled.div`
   height: 80px;
   width: 100%;
   background-color: #FEFCF7;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Container = styled.div`
   width: 100%;
   margin: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h1{
      margin: 1em;
   }
`

export const StyledInput = styled.div`
   background-color: #A6A5B2;
   padding: 2em;
   border-radius: 100px;
   display: flex;
   justify-content: center;
   align-items: center;


   input{
      outline: none ;
      border: none;
      padding: 0.5em;
      border-radius: 100px;
   }
`