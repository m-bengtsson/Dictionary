interface DefinitionsProps {
  definitions: Definitions[];
}
/**
 * Displays the definitions result
 */ 

function DefinitionsInfo({ definitions }: DefinitionsProps) {
  return (
    <>
      <h4>Definitions: </h4>
      {definitions.map(({ definition, example, synonyms, antonyms }, index) => (
        <div className="border-bottom">
          <p>{index +1}. {definition}</p>
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
        </div>
      ))}
    </>
  );
}

export default DefinitionsInfo;
