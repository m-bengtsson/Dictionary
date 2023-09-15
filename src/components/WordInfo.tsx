import WordItem from "./WordItem";
import { StyledWordInfo } from "./styles/StyledMain";

interface WordProps {
  wordInfo: Word[];
}

/**
 * Displays the whole information result from the searched word
 */

function WordInfo({wordInfo} : WordProps) {
   console.log(wordInfo)
  return (
    <StyledWordInfo>
      {wordInfo.map((word, index) =>(
         <WordItem key={index} word={word}/>
      ) )}
    </StyledWordInfo>
  );
}

export default WordInfo;
