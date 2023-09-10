interface Props {
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

function Input({ setSearchedWord, onSubmit }: Props) {
  return (
    <div className="">
      <input
        placeholder="search for a word.."
        onChange={(e) => setSearchedWord(e.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
}

export default Input;
