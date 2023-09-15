import styled from "styled-components";

export const StyledMainWrapper = styled.div`
  background-color: rgb(121, 122, 150, 0.5);
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
  background-color: #c3db96;
  margin-top: 20px;

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
  }
`;

export const StyledMeaningsInfo = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 1.5em;
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
