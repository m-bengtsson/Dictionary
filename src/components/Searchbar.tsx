import { StyledInput } from "./styles/StyledHeader";
import { IoSearch } from "react-icons/io5";
interface Props {
  searchedWord: string;
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

function Searchbar({ setSearchedWord, onSubmit, searchedWord }: Props) {
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
          value={searchedWord}
          onChange={(e) => setSearchedWord(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IoSearch aria-label="search-icon" onClick={onSubmit} />
      </div>
    </StyledInput>
  );
}

export default Searchbar;
