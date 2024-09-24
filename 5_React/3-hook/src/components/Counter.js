import { useEffect, useState, useRef } from "react";

import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheckRef = useRef(false);

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

  // 마운트
  useEffect(() => {
    console.log("mount");
  }, []);

  // 업데이트
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    } else {
      console.log("count update!");
    }
  }, [count]);

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("unmount!");
    };
  }, []);

  return (
    <>
      <h1>Total Clicks : {count}</h1>
      <Btn Click={plusfive} text="+5" />
      <Btn Click={minusfive} text="-5" />
      <Btn Click={plusten} text="+10" />
      <Btn Click={minusten} text="-10" />
      <Btn Click={multtwo} text="x2" />
      <Btn Click={dividetwo} text="÷2" />
      <Btn Click={reset} text="reset" />
    </>
  );
};

export default Counter;
