import WordItem from "./WordItem";

interface WordProps {
  wordInfo: Word[];
}

function WordInfo({wordInfo} : WordProps) {
  return (
    <div className="">
      {wordInfo.map((word, index) =>(
         <WordItem key={index} word={word}/>
      ) )}
    </div>
  );
}

export default WordInfo;
