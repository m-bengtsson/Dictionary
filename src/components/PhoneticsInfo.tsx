import { useState } from "react";
import { AiTwotoneSound } from "react-icons/ai";

interface PhoneticsProps {
  phonetics: Phonetics[];
}

/**
 * 
 * Diplays the phonetics and the audio element as well as handling the audio play function, creating a new audio element for each audioUrl and calling the play method when icon is clicked. A textbox of the phonetics sources and license are displayed on the phonetic "onMouseEnter" and removed "onMouseLeave".
 * 
 */

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
      {phonetics.map(({text, audio, license, sourceUrl}, index) => (
        <li key={index}>
          <p>{text}</p>
          {audio && (
            <AiTwotoneSound
              onClick={() => playAudio(audio)}
              aria-label="audio-icon"
            />
          )}
          {showPhoneticsInfo && (
            <div className="phonetics-hover">
              {license && (
                <a href={license.url}>{license.name}</a>
              )}
              {sourceUrl && <a href={sourceUrl}>Source</a>}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default PhoneticsInfo;
