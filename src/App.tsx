import { useState } from "react";


import WordItem from "./components/WordItem";
import Searchbar from "./components/Searchbar";
import GlobalStyles from "./components/styles/Global";
import { Container, TopContainer } from "./components/styles/StyledHeader";
import { StyledMainWrapper, StyledMainContainer } from "./components/styles/StyledMain";

/**
 * 
 * The App component renders everything that is visible on the page. It is responsible for the api requests and handles the query for the searsched word.
 */

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [wordInfo, setWordInfo] = useState<Word[]>([]);

  const fetchWord = async () => {
    try {
      const resp = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
      );
      if (resp.status === 404) {
        setWordInfo([]);
        setErrorMessage(
          "Sorry pal, we couldn't find definitions for the word you were looking for."
        );
      } else {
        const word = await resp.json();
        setWordInfo(word);
         setSearchedWord("");

      }
    } catch (error) {
      setErrorMessage("Failed to fetch data");
    }
  };

  const onSubmit = () => {
    if (!searchedWord) {
      setErrorMessage("Please enter a word to search for definitions.");
    } else {
      fetchWord();
      wordInfo && setErrorMessage("");
    }
  };

  return (
    <>
      <GlobalStyles />
      <TopContainer>
        <p> SEARCH AND DISCOVER</p>
      </TopContainer>
      <Container>
        <h1>Free Dictionary</h1>
        <Searchbar onSubmit={onSubmit} searchedWord={searchedWord} setSearchedWord={setSearchedWord} />
      </Container>
      <StyledMainWrapper>
        <StyledMainContainer>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {wordInfo.map((word, index) =>(
         <WordItem key={index} word={word}/>
      ) )}
        </StyledMainContainer>
      </StyledMainWrapper>
    </>
  );
}
export default App;
