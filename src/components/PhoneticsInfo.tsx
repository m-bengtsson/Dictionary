import { useState } from "react";
import { AiTwotoneSound } from "react-icons/ai";

interface PhoneticsProps {
  phonetics: Phonetics[];
}

function PhoneticsInfo({ phonetics }: PhoneticsProps) {
  const [showPhoneticsInfo, setShowPhoneticsInfo] = useState(false);

  // Creating a new audio element for each audioUrl and calling the play method when icon is clicked
  const playAudio = (audioUrl: string) => {
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };
  return (
    <ul className="phonetics-info"
      onMouseEnter={() => setShowPhoneticsInfo(true)}
      onMouseLeave={() => setShowPhoneticsInfo(false)}
    >
      {phonetics.map((phonetic, index) => (
        <li key={index}>
          <p>{phonetic.text}</p>
          {phonetic.audio && (
            <AiTwotoneSound
              onClick={() => playAudio(phonetic.audio)}
              aria-label="audio-icon"
            />
          )}
          {showPhoneticsInfo && (
            <div className="phonetics-hover">
              {phonetic.license && (
                <a href={phonetic.license.url}>{phonetic.license.name}</a>
              )}
              {phonetic.sourceUrl && <a href={phonetic.sourceUrl}>Source</a>}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default PhoneticsInfo;
