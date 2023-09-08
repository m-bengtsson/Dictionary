interface WordItemProps {
  word: Word;
}

function WordItem({word} :WordItemProps ) {
   console.log('word', word)

   

  return (
    <div className="">
      <h2>{word.word}</h2>
     
    </div>
  );
}

export default WordItem;
