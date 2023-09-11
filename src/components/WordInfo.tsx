import WordItem from "./WordItem";

interface WordProps {
  wordInfo: Word[];
}

function WordInfo({wordInfo} : WordProps) {
  return (
    <>
      {wordInfo.map((word, index) =>(
         <WordItem key={index} word={word}/>
      ) )}
    </>
  );
}

export default WordInfo;
