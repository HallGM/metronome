const TimeSelector = ({changeTimeSignature}) => {
  return (
    <div className="time-selector">
    <label htmlFor="time-signature" >Time Signature: </label>
      <select id="time-signature" onChange={(e) => changeTimeSignature(e.target.value)}>
        <option value={"off"} >Off</option>
        {[2, 3, 4, 5, 6, 7].map((number) => (
          <option key={number} value={number}>{number}/4</option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;
