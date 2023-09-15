import { StyledWordItem } from "./styles/StyledMain";
import PhoneticsInfo from "./Phonetics";
import MeaningsInfo from "./Meanings";

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
    <StyledWordItem className="border-dashed-blue">
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
      <div>
         <a href={license.url}>{license.name}</a>
      </div>
    </StyledWordItem>
  );
}

export default WordItem;
