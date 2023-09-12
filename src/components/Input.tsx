import { StyledInput } from "./styles/Styled";
import {IoSearch} from "react-icons/io5"
interface Props {
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

function Input({ setSearchedWord, onSubmit }: Props) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <StyledInput>
      <p>Search for a definition:</p>
      <div>
        <input
          placeholder="search for a word.."
          onChange={(e) => setSearchedWord(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IoSearch aria-label="search-icon" onClick={onSubmit}/>
      </div>
    </StyledInput>
  );
}

export default Input;
