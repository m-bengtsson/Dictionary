import styled from "styled-components";

export const StyledMainWrapper = styled.div`
  background-color: rgb(163, 177, 204);
  display: flex;
  justify-content: center;
  height: fit-content;
  min-height: 70vh;
`;
export const StyledMainContainer = styled.div`
  display: flex;
  background-color: #fefcf7;
  width: 90%;
  max-width: 700px;
  min-width: 480px;
  padding: 3em;
  border-radius: 6px;
  min-height: 70vh;
  height: min-content;
  margin-top: 2em;
  flex-direction: column;
  width: 100%;

  && > div {
    border-bottom: 1px solid #2e3d53;
    position: relative;
    width: 100%;
    padding: 1em 0 1em 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;
export const StyledWordInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  && > div {
    border-bottom: 1px solid #2e3d53;
    position: relative;
    width: 100%;
    padding: 1em 0 1em 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;
export const StyledWordItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .phonetics-info,
  .phonetics-info > li {
    display: flex;
    margin: 8px 8px 8px 2px;
  }


  div > * {
    margin: 2px;
  }

  svg {
    color: #ff891a;
    font-size: 1.3em;
    margin-left: 4px;
  }
  svg:hover {
    color: rgb(255, 137, 26, 0.6);
    cursor: pointer;
    transition: 0.2s;
  }
`;

export const StyledMeaningsInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: em 0;

  h4 {
    margin-top: 1em;
  }
  .part-of-speech{
   display: flex;
   flex-direction: column;
   padding: 2em 0;
   align-items: flex-start;
   justify-content: center;
   border-bottom: 1px solid orange;
  }

  .synonyms {
    display: flex;
    flex-direction: column;
    margin: 2px;
  }
  li {
    margin: 4px;
    list-style: none;
  }

  .italic {
    font-style: italic;
  }
`;


export const StyledDefinitions = styled.li`
   padding: 0.5em 0;

   && > div{
      margin: 0.5em;
   }

`
