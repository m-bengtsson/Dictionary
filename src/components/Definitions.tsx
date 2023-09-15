import { useState } from "react";
import { StyledDefinitions } from "./styles/StyledMain";

interface DefinitionsProps {
  definitions: Definitions[];
}
/**
 * Displays the definitions result part of meanings
 */ 

function DefinitionsInfo({ definitions }: DefinitionsProps) {

   const [showAll, setShowAll] = useState(false);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  const displayedDefinitions = showAll ? definitions : definitions.slice(0, 2);

  return (
    <>
    <div className="definitions-button-container">
      <h4>Definitions: </h4>


    </div>
      <ul>
      {displayedDefinitions.map(({ definition, example, synonyms, antonyms }, index) => (
        <StyledDefinitions key={index}>
          <p>* {definition}</p>
          {example && (
            <div className="example">
              <h5>Example: </h5>
              <p className="italic">"{example}"</p>
            </div>
          )}
          {synonyms.length > 0 && (
             <div>
              <h5>Synonyms: </h5>
              <ul>
              {synonyms.map((synonym) => (
                 <li>{synonym}</li>
                 ))}
              </ul>
            </div>
          )}
          {antonyms.length > 0 && (
             <div>
              <h5>Antonyms: </h5>
              <ul>
              {antonyms.map((antonym) => (
                 <li>{antonym}</li>
                 ))}
              </ul>
            </div>
          )}
        </StyledDefinitions>
          ))}
      </ul>
            {definitions.length > 3 && (
        <button className="show-more-less" onClick={toggleShow}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </>
  );
}

export default DefinitionsInfo;
