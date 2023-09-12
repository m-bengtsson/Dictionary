import { useRef } from "react";
import { StyledWordItem } from "./styles/StyledMain";
import { AiTwotoneSound } from "react-icons/ai";

interface WordItemProps {
  word: Word;
}

function WordItem({ word }: WordItemProps) {
  // Set audio useRef to not trigger rerender when playing audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // If audio exists play audio when button is clicked
  const playAudio = () => {
     console.log('audioref: ', audioRef)
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <StyledWordItem>
      <div>
        <div>
          <h3>{word.word}</h3>
        </div>
        <div>
          <p>{word.phonetic}</p>
        </div>
      </div>
      <ul>
        {word.phonetics.map((phonetic) => (
          <li>
            <p>{phonetic.text}</p>
            {phonetic.audio && <><audio ref={audioRef} src={phonetic.audio} preload="auto" />
            <AiTwotoneSound onClick={playAudio} /></>}
          </li>
        ))}
      </ul>
    </StyledWordItem>
  );
}

export default WordItem;
