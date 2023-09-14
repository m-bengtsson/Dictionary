import { StyledWordItem } from "./styles/StyledMain";
import PhoneticsInfo from "./PhoneticsInfo";
import MeaningsInfo from "./MeaningsInfo";

interface WordItemProps {
  word: Word;
}

function WordItem({ word }: WordItemProps) {
  return (
    <StyledWordItem>
      <div className="row">
        <div>
          <h3>{word.word}</h3>
        </div>
        <div>
          <p>{word.phonetic}</p>
        </div>
      </div>
      <PhoneticsInfo phonetics={word.phonetics}/>
      <MeaningsInfo meanings={word.meanings}/>
    </StyledWordItem>
  );
}

export default WordItem;
