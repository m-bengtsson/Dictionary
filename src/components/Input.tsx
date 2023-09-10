import { StyledInput } from "./styles/Styled";


interface Props {
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

function Input({ setSearchedWord, onSubmit }: Props) {
  return (
   <StyledInput>
      
      <p>Search for a definition:</p>
      <input
           placeholder="search for a word.."
           onChange={(e) => setSearchedWord(e.target.value)}
         />
         <button onClick={onSubmit}>Search</button>
   </StyledInput>
  );
}

export default Input;
