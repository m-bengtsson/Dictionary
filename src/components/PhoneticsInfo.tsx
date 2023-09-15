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
  const [hoveredPhoneticIndex, setHoveredPhoneticsIndex] = useState<number | null>(null);

  const playAudio = (audioUrl: string) => {
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };
  return (
    <ul className="phonetics-info">
      {phonetics.map(({ text, audio, license, sourceUrl }, index) => (
        <li
          onMouseEnter={() => setHoveredPhoneticsIndex(index)}
          onMouseLeave={() => setHoveredPhoneticsIndex(null)}
          key={index}
        >
          <p>{text}</p>
          {audio && (
            <AiTwotoneSound
              onClick={() => playAudio(audio)}
              aria-label="audio-icon"
            />
          )}
          {hoveredPhoneticIndex === index &&  (
            license || sourceUrl ? (
            <div className="phonetics-audio-info">
             <a href={license.url}>{license.name}</a>
             <a href={sourceUrl}>Source</a>
            </div> ): null
          )}
        </li>
      ))}
    </ul>
  );
}

export default PhoneticsInfo;
