import React, { useState, useEffect } from "react";
import "./App19.css";

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [message, setMessage] = useState("");
  const [highlightClass, setHighlightClass] = useState("");

  const getOvers = () => {
    const completedOvers = Math.floor(balls / 6);
    const remainingBalls = balls % 6;
    return `${completedOvers}.${remainingBalls}`;
  };

  const addRun = (run) => {
    if (wickets >= 10) {
      setMessage(`Game over, the score is ${runs}/${wickets}`);
      return;
    }

    setRuns((prev) => prev + run);
    setBalls((prev) => prev + 1);
    setMessage(`${run}!! Well done!`);

    if (run === 4 || run === 6) {
      setHighlightClass("rainbow");
    } else {
      setHighlightClass("green");
    }

    setTimeout(() => {
      setHighlightClass("");
      setMessage("");
    }, 2000);
  };

  const addWicket = () => {
    if (wickets >= 10) {
      setMessage(`Game over, the score is ${runs}/${wickets}`);
      return;
    }

    setWickets((prev) => prev + 1);
    setBalls((prev) => prev + 1);
    setHighlightClass("red");
    setMessage("Out!");

    setTimeout(() => {
      setMessage("New batter...");
      setHighlightClass("");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }, 1000);
  };

  useEffect(() => {
    if (balls !== 0 && balls % 6 === 0 && wickets < 10) {
      setMessage("New bowler...");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }, [balls]);

  return (
    <div className="app19-container">
      <h1>App19</h1>
      <h2>Assignment</h2>
      <div className="scoreboard-title">Cricket Scoreboard</div>
      <div className="scoreboard-main">
        <div className="left-box">
          <h2>{runs}/{wickets}</h2>
          <p style={{ fontSize: "16px" }}>Overs: {getOvers()}</p>
          <div className="button-section">
            {[1, 2, 3, 4, 5, 6].map((run) => (
              <button key={run} onClick={() => addRun(run)}>{run}</button>
            ))}
          </div>
          <button className="wicket-button" onClick={addWicket}>Wicket</button>
        </div>
        <div className={`right-box ${highlightClass}`}>
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
}
