import { useEffect, useState, ChangeEvent } from "react";
import "./App.css";


function App() {

      const [searchedWord, setSearchedWord] = useState("");
      
      const fetchDrinks = async (searchWord : string) => {
         try {
            const resp = await fetch(
               `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
            );
            const word = await resp.json();
            console.log('word from dictionary api', word)

         } catch (error) {
            console.log('Failed to fetch data', error)
         }
      };

   const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      console.log('input', event.currentTarget.value)
      setSearchedWord(event.currentTarget.value)
   }

   const onSubmit = () => {
      fetchDrinks(searchedWord)
   }




  return (
    <div className="App">
         <h1>Dictionary</h1>
         <input 
            placeholder="search for a word.."
            onChange={inputHandler}
            />
         <button onClick={onSubmit}>Search</button>
         <div><p>word information</p></div>
    </div>
  );
}

export default App;
