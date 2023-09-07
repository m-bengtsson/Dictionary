import { useEffect } from "react";
import "./App.css";

function App() {

      useEffect(() => {
      const fetchDrinks = async () => {
         try {
            const resp = await fetch(
               "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
            );
            const word = await resp.json();
            console.log('word from dictionary api', word)

         } catch (error) {
            console.log('Failed to fetch data', error)
         }
      };
      fetchDrinks();
   }, []);


  return (
    <div className="App">
         <h1>Dictionary</h1>
    </div>
  );
}

export default App;
