import React, { useEffect, useRef, useState } from "react";
import "./App16.css"; 
export default function App16() {
  const [num, setNum] = useState(0);
  const prevNum = useRef();
  const msgRef = useRef();

  useEffect(() => {
    prevNum.current = num;
  }, [num]);

  useEffect(() => {
    if (prevNum.current) {
      if (prevNum.current > num) {
        msgRef.current.style.color = "red";
      } else if (prevNum.current < num) {
        msgRef.current.style.color = "green";
      }
    }
  }, [num]);

  return (
    <div className="App16-Container">
      <h1>App16</h1>
      <h2>useRef to store previous value</h2>
      <p>
        <input
          type="number"
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </p>
      <hr />
      <p>Current Number: {num}</p>
      <p>Previous Number: {prevNum.current}</p>
      <h3 ref={msgRef}>Hello World</h3>
    </div>
  );
}
