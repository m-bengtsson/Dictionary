interface MeaningsProps {
  meanings: Meanings[];
}

function MeaningsInfo({ meanings }: MeaningsProps) {
  console.log(meanings);

  return (
    <>
      {meanings.map((meaning, index) => <>
        <p>{meaning.partOfSpeech}</p>
        {meaning.definitions.map(definition => <p>{definition.definition}</p>)}
        {meaning.definitions.map(definition => <p>_____________-{definition.example}</p>)}
        {meaning.definitions.map(definition => <p>_____________-{definition.example}</p>)}
      </>)}
    </>
  );
}

export default MeaningsInfo;
