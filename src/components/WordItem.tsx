interface WordItemProps {
  word: Word;
}

function WordItem({word} :WordItemProps ) {
   console.log('word', word)

  return (
    <>
      <h2>{word.word}</h2>
    </>
  );
}

export default WordItem;
