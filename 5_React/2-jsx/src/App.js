import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const plusfive = () => {
    setCount(count + 5);
  };
  const minusfive = () => {
    setCount(count - 5);
  };
  const plusten = () => {
    setCount(count + 10);
  };
  const minusten = () => {
    setCount(count - 10);
  };
  const multtwo = () => {
    setCount(count * 2);
  };
  const dividetwo = () => {
    setCount(count / 2);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <button onClick={plusfive}>+5</button>
      <button onClick={minusfive}>-5</button>
      <button onClick={plusten}>+10</button>
      <button onClick={minusten}>-10</button>
      <button onClick={multtwo}>x2</button>
      <button onClick={dividetwo}>÷2</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
