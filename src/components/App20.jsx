import React, { useState, createContext } from "react";
import App20a from "./App20a";
import App20b from "./App20b";
import "./App20.css";

export const AppContext = createContext();

export default function App20() {
  const [count, setCount] = useState(0);

  return (
    <div className="app20-container">
      <h1>App20</h1>
      <h2>useContext hook - sharing variables across components</h2>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </p>
      <hr />
      <AppContext.Provider value={{ count, setCount }}>
        <App20a />
        <hr />
        <App20b />
      </AppContext.Provider>
    </div>
  );
}
