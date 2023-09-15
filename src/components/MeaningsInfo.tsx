import DefinitionsInfo from "./DefinitionsInfo";
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
      <h3>Meanings</h3>
      {meanings.map(
        ({ partOfSpeech, definitions, synonyms, antonyms }, index) => (
          <>
            <h4 className="italic" key={index}>
              {index +1}. {partOfSpeech}
            </h4>
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
          </>
        )
      )}
    </StyledMeaningsInfo>
  );
}

export default MeaningsInfo;
