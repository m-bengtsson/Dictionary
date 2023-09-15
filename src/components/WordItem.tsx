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

function WordItem({ word: {word, phonetic, phonetics, meanings, sourceUrls, license} }: WordItemProps) {
  return (
    <StyledWordItem>
      <div className="row">
        <div>
          <h2>{word}</h2>
        </div>
        <div>
          <p>{phonetic}</p>
        </div>
      </div>
      <PhoneticsInfo phonetics={phonetics}/>
      <MeaningsInfo meanings={meanings}/>
      {sourceUrls && sourceUrls.map(url => <a href={url}>Source</a>)}
    </StyledWordItem>
  );
}

export default WordItem;
