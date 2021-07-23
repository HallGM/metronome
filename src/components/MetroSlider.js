import { Slider } from "rsuite";

function MetroSlider({tempo, handleChange}) {
  return (
    <>
      <Slider
        progress
        min={20}
        max={400}
        defaultValue={120}
        onChange={value => handleChange(value)}
      />
    </>
  );
}

export default MetroSlider;
