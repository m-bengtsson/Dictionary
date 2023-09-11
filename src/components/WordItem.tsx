import { useRef } from "react";

interface WordItemProps {
  word: Word;
}

function WordItem({word} :WordItemProps ) {
   console.log('word', word)
   
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
   if (audioRef.current) {
      audioRef.current.play();
    }

  }

  return (
    <>
      <h3>{word.word}</h3>
      <p>{word.phonetic}</p>
      <audio ref={audioRef} src="https://api.dictionaryapi.dev/media/pronunciations/en/vast-us.mp3" preload="auto"/>
      <button onClick={playAudio}>Audio</button>
      
    </>
  );
}

export default WordItem;
