import { StyledWordItem } from "./styles/StyledMain";
import PhoneticsInfo from "./PhoneticsInfo";
import MeaningsInfo from "./MeaningsInfo";

interface WordItemProps {
  word: Word;
}
/**
 * 
 * Diplays a all the information of a word from the searched word
 * 
 */

function WordItem({ word }: WordItemProps) {
  return (
    <StyledWordItem>
      <div className="row">
        <div>
          <h2>{word.word}</h2>
        </div>
        <div>
          <p>{word.phonetic}</p>
        </div>
      </div>
      <PhoneticsInfo phonetics={word.phonetics}/>
      <MeaningsInfo meanings={word.meanings}/>
      {word.sourceUrls && word.sourceUrls.map(url => <a href={url}>Source</a>)}
    </StyledWordItem>
  );
}

export default WordItem;
