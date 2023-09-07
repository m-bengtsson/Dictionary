import { useState, ChangeEvent } from "react";
import "./App.css";

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [wordInfo, setWordInfo] = useState<Word[]>([]);

  const fetchDrinks = async (searchWord: string) => {
    try {
      const resp = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );

      if (resp.status === 404) {
        setErrorMessage(
          "Sorry pal, we couldn't find definitions for the word you were looking for."
        );
        throw new Error("No Definitions Found");
      }
      const word = await resp.json();
      setWordInfo(word);
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };
  console.log(wordInfo)

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(event.currentTarget.value);
  };

  const onSubmit = () => {
    if (!searchedWord) {
      setErrorMessage("Tomt fält");
    } else {
      fetchDrinks(searchedWord);
    }
  };

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <input placeholder="search for a word.." onChange={inputHandler} />
      <button onClick={onSubmit}>Search</button>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <p>word information</p>
      </div>
    </div>
  );
}

export default App;
