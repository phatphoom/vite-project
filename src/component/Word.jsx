import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
export default function Word({ result }) {
  const { word, phonetic, phonetics } = result;
  const newjeans =
    phonetics[0].audio || phonetics[1].audio || phonetics[3].audio;

  const playaudio = () => {
    try {
      let audio = new Audio(newjeans);
      audio.play();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="word">
      <h3>{word}</h3>
      <p>{phonetic}</p>
      <p onClick={playaudio} className="audio">
        <FontAwesomeIcon icon={faVolumeUp} />
      </p>
    </div>
  );
}
