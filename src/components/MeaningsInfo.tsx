import DefinitionsInfo from "./DefinitionsInfo";
import { StyledMeaningsInfo } from "./styles/StyledMain";

interface MeaningsProps {
  meanings: Meanings[];
}

function MeaningsInfo({ meanings }: MeaningsProps) {
  return (
    <StyledMeaningsInfo>
      {meanings.map(
        ({ partOfSpeech, definitions, synonyms, antonyms }, index) => (
          <>
            <p className="italic" key={index}>
              {partOfSpeech}
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
          </>
        )
      )}
    </StyledMeaningsInfo>
  );
}

export default MeaningsInfo;
