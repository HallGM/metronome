import { useState, useEffect } from "react";
import tickSound from "../audio/tick.mp3";
import dingSound from "../audio/ding.mp3";
import useSound from "use-sound";
import "rsuite/dist/styles/rsuite-default.css";
import MetroSlider from "../components/MetroSlider";
import PlayButton from "../components/PlayButton";
import DisplayTempo from "../components/DisplayTempo";
import TimeSelector from "../components/TimeSelector";

function convertTempoToInterval(tempo) {
  return (60 / tempo) * 1000;
}

let clickInterval = false;
let beatCounter = 0;

function MetronomeContainer() {
  const [playing, setPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);
  const [timeSignature, setTimeSignature] = useState("off");
  const [tick] = useSound(tickSound);
  const [ding] = useSound(dingSound);

  useEffect(() => {
    if (clickInterval) {
      clearInterval(clickInterval);
    }

    if (!playing) return;

    if (timeSignature === "off") {
      clickInterval = setInterval(() => {
        tick();
      }, convertTempoToInterval(tempo));
    } else {
      clickInterval = setInterval(() => {
        if (beatCounter === 0) {
          ding();
        } else {
          tick();
        }

        beatCounter++;
        beatCounter = beatCounter % timeSignature;
      }, convertTempoToInterval(tempo));
    }
  }, [playing, tempo, tick, ding, timeSignature]);

  return (
    <div className="metronome-container">
      <h1>Metronome</h1>
      <PlayButton play={playing} handlePlay={() => setPlaying(!playing)} />
      <DisplayTempo tempo={tempo} />
      <TimeSelector changeTimeSignature={(value) => setTimeSignature(value)} />
      <MetroSlider
        tempo={tempo}
        handleChange={(newTempo) => setTempo(newTempo)}
      />
    </div>
  );
}

export default MetronomeContainer;
