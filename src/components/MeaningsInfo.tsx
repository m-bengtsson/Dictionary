import { StyledMeaningsInfo } from "./styles/StyledMain";

interface MeaningsProps {
  meanings: Meanings[];
}

function MeaningsInfo({ meanings }: MeaningsProps) {
  return (
    <StyledMeaningsInfo>
      {meanings.map(({partOfSpeech, definitions, synonyms, antonyms}, index) => (
        <>
          {/* Part of Speech */}
          <p className="italic" key={index}>{partOfSpeech}</p>
          {/* Synonyms */}
          {synonyms.length > 0 && (
            <>
              <h4>Synonyms:</h4>
              <ul>
                {synonyms.map((synonym) => (
                  <li>{synonym}</li>
                ))}
              </ul>
            </>
          )}
           {/* Antonyms */}
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
          {/* Definitions */}
          <h4>Definitions: </h4>
          {definitions.map(
            ({ definition, example, synonyms, antonyms }) => (
              <div>
                <p>* {definition}</p>
                {example && (
                  <>
                    <h4>Example: </h4>
                    {<p>{example}</p>}
                  </>
                )}
                {synonyms.length > 0 && (
                  <>
                    <h4>Synonyms: </h4>
                    {synonyms.map((synonym) => (
                      <p>{synonym}</p>
                    ))}
                  </>
                )}
                {antonyms.length > 0 && (
                  <>
                    <h4>Antonyms: </h4>
                    {antonyms.map((antonym) => (
                      <p>{antonym}</p>
                    ))}
                  </>
                )}
                <p>_______________________________________________ </p>
              </div>
            )
          )}
        </>
      ))}
    </StyledMeaningsInfo>
  );
}

export default MeaningsInfo;
