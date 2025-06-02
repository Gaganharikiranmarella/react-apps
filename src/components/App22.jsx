import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App22.css";

const App22 = () => {
  const [temp, setTemp] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/weather")
      .then((res) => {
        setTemp(res.data.temperature);
      })
      .catch((err) => {
        console.error("Error fetching temperature:", err);
      });
  }, []); 
  return (
    <div className="card">
      <h1 className="title">Current Temperature</h1>
      <p className="temperature">{temp}</p>
    </div>
  );
};

export default App22;
