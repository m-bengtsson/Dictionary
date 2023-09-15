import DefinitionsInfo from "./Definitions";
import { StyledMeaningsInfo } from "./styles/StyledMain";

interface MeaningsProps {
  meanings: Meanings[];
}

/**
 * Displays the meanings of the searched word
 **/

function MeaningsInfo({ meanings }: MeaningsProps) {
  return (
    <StyledMeaningsInfo>
      {meanings.map(
        ({ partOfSpeech, definitions, synonyms, antonyms }, index) => (
          <div className="part-of-speech">
            <p className="italic" key={index}>
              {index +1}. {partOfSpeech}
            </p>
            {synonyms.length > 0 && (
              <>
                <h4>Synonyms:</h4>
                <ul className="synonyms">
                  {synonyms.map((synonym) => (
                    <li>{synonym}</li>
                  ))}
                </ul>
              </>
            )}
            {antonyms.length > 0 && (
              <>
                <h4>Antonyms</h4>
                <ul>
                  {antonyms.map((antonym) => (
                    <li>{antonym}</li>
                  ))}
                </ul>
              </>
            )}
            <DefinitionsInfo definitions={definitions}/>
          </div>
        )
      )}
    </StyledMeaningsInfo>
  );
}

export default MeaningsInfo;
