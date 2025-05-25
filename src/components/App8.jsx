import React, { useState } from "react";
import "./App8.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App-Container">
      <div className="Counter-Box">
        <div className="Counter-Number">Counter: {count}</div>
        <button className="Counter-Button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
}
