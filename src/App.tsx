import { useState, ChangeEvent } from "react";

//import "./App.css";
import WordInfo from "./components/WordInfo";
import GlobalStyles from "./components/styles/Global";
import {Container} from "./components/styles/Container";
import Input from "./components/Input";



const theme = {
   colors:{

   }
}

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [wordInfo, setWordInfo] = useState<Word[]>([]);

  const fetchWord = async (searchWord: string) => {
    try {
      const resp = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      if (resp.status === 404) {
         setWordInfo([])
         setErrorMessage(
          "Sorry pal, we couldn't find definitions for the word you were looking for."
          );
      } else {
         const word = await resp.json();
         
         setWordInfo(word);
      }
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(event.currentTarget.value);
  };

  const onSubmit = () => {
    if (!searchedWord) {
      setErrorMessage("Please enter a word to search for definitions.");
    } else {
      fetchWord(searchedWord);
      wordInfo && setErrorMessage("")
    }
  };

  return (
   <>
   <GlobalStyles />
    <Container>
      <h1>Dictionary</h1>
      <Input onSubmit={onSubmit} setSearchedWord={setSearchedWord}/>
      {errorMessage && <p>{errorMessage}</p>}
      <WordInfo wordInfo={wordInfo}/>
    </Container>
    </>
  );
}



export default App;
