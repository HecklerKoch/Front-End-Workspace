import { useState, useRef } from "react";
import Btn from "./Btn";

const InputText = () => {
  const [text, setText] = useState("");
  const textRef = useRef();

  const write = (e) => {
    setText(e.target.value);
  };
  const complete = () => {
    alert(textRef.current.value);
    // setText("");
    textRef.current.value = "";
    textRef.current.focus();
  };
  return (
    <>
      <input ref={textRef} onChange={write} value={text} />
      <button onClick={complete}>작성완료</button>
      <Btn Click={complete} text="작성완료" />
    </>
  );
};

export default InputText;
