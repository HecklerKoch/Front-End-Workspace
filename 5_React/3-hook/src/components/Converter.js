import { useState, useEffect } from "react";
import Btn from "./Btn";

const Converter = () => {
  const [text, setText] = useState("Minutes => Hours");
  const [bool, setBool] = useState(false);
  const [number, setNumber] = useState("");

  const invert = () => {
    setBool(!bool);
    reset();
  };

  const change = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);
  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          type="number"
          placeholder="Minutes"
          disabled={bool}
          value={bool ? number * 60 : number}
          onChange={change}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          type="number"
          placeholder="Hours"
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
          onChange={change}
        />
      </p>
      <Btn Click={reset} text="reset" />
      <Btn Click={invert} text={text} />
      <button onClick={reset}>Reset</button>
      <button onClick={invert}>{text}</button>
    </>
  );
};

export default Converter;
