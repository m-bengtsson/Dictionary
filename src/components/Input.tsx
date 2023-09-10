import { StyledInput } from "./styles/Styled";
import { KeyboardEvent } from "react";


interface Props {
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}


function Input({ setSearchedWord, onSubmit }: Props) {

const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
   if(event.key === 'Enter'){
      onSubmit()
      
   }
}

  return (
   <StyledInput>
      <p>Search for a definition:</p>
      <input
           placeholder="search for a word.."
           onChange={(e) => setSearchedWord(e.target.value)}
           onKeyDown={handleKeyDown}
         />
         <button onClick={onSubmit}>Search</button>
   </StyledInput>
  );
}

export default Input;
