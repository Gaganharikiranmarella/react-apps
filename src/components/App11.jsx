import React, { useState, useEffect } from "react";
import "./App11.css";

export default function App10() {
  const [number, setNumber] = useState("");
  const [results, setResults] = useState({
    add: "",
    sub: "",
    mul: "",
    div: "",
  });

  useEffect(() => {
    const n = parseFloat(number);
    if (!isNaN(n)) {
      setResults({
        add: `100 + ${n} = ${100 + n}`,
        sub: `100 - ${n} = ${100 - n}`,
        mul: `100 × ${n} = ${100 * n}`,
        div: n !== 0 ? `100 ÷ ${n} = ${(100 / n).toFixed(2)}` : "100 ÷ 0 = ∞",
      });
    } else {
      setResults({
        add: "",
        sub: "",
        mul: "",
        div: "",
      });
    }
  }, [number]);

  return (
    <div className="App-Container">
      <input
        type="number"
        className="Number-Input"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div className="Corner Top-Left">
        <h3>Addition</h3>
        <p>{results.add}</p>
      </div>
      <div className="Corner Top-Right">
        <h3>Subtraction</h3>
        <p>{results.sub}</p>
      </div>
      <div className="Corner Bottom-Left">
        <h3>Multiplication</h3>
        <p>{results.mul}</p>
      </div>
      <div className="Corner Bottom-Right">
        <h3>Division</h3>
        <p>{results.div}</p>
      </div>
    </div>
  );
}
