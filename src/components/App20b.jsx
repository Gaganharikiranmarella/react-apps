import React, { useContext } from "react";
import { AppContext } from "./App20";
import "./App20b.css";

export default function App20b() {
  const { count, setCount } = useContext(AppContext);

  return (
    <div className="app20b-box">
      <h3>App20b</h3>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </p>
    </div>
  );
}
