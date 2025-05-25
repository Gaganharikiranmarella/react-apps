import React, { useState } from "react";
import "./App9.css";

export default function App9() {
  const [count, setCount] = useState(10);

  return (
    <div className="App9-Container">
      <div className="App9-Box">
        <h2 className="App9-Title">Value: {count}</h2>
        <div className="App9-Buttons">
          <button className="App9-Button" onClick={() => setCount(count - 1)}>-</button>
          <button className="App9-Button" onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}
