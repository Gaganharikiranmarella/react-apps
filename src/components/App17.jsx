import React, { useState } from "react";
import Greet from "./Greet";
import "./App17.css"; 

export default function App17() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App17-Container">
      <h1>App17</h1>
      <h2>React Memo - for better performance</h2>
      <p>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <Greet name={name} />
      <p>Count: {count}</p>
      <button onClick={increment}>Update Count</button>
    </div>
  );
}
