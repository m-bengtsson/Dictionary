import { useRef } from "react";
import { StyledWordItem } from "./styles/StyledMain";
import { AiTwotoneSound } from "react-icons/ai";

interface WordItemProps {
  word: Word;
}

function WordItem({ word }: WordItemProps) {
  // Set audio useRef to not trigger rerender when playing audio
  const playAudio = (audioUrl: string) => {
   const audioElement = new Audio(audioUrl);
   audioElement.play();
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
        {word.phonetics.map((phonetic, index) => (
          <li key={index}>
            <p>{phonetic.text}</p>
            {phonetic.audio && 
                <AiTwotoneSound onClick={() => playAudio(phonetic.audio)} aria-label="audio-icon" />
            }
          </li>
        ))}
      </ul>
    </StyledWordItem>
  );
}

export default WordItem;
