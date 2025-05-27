import React, { useContext } from "react";
import { AppContext } from "./App20";
import "./App20a.css";

export default function App20a() {
  const { count, setCount } = useContext(AppContext);

  return (
    <div className="app20a-box">
      <h3>App20a</h3>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </p>
    </div>
  );
}
