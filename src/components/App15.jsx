import React, { useRef } from "react";
import "./App15.css";

export default function App15() {
  // Section 1
  const nameRef = useRef();

  const handleSubmitName = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue";
  };

  // Section 2
  const num1Ref = useRef();
  const num2Ref = useRef();
  const resultRef = useRef();

  const handleSum = () => {
    const n1 = parseFloat(num1Ref.current.value) || 0;
    const n2 = parseFloat(num2Ref.current.value) || 0;
    resultRef.current.textContent = `Sum: ${n1 + n2}`;
  };

  // Section 3
  const colorRef = useRef();
  const helloRef = useRef();

  const changeColor = () => {
    helloRef.current.style.color = colorRef.current.value;
  };

  return (
    <div className="App15-Container">
      {/* Section 1 */}
      <section className="section">
        <h1>App15</h1>
        <h2>useRef hook - uncontrolled component</h2>
        <input type="text" ref={nameRef} placeholder="Enter name" />
        <button onClick={handleSubmitName}>Submit</button>
      </section>

      {/* Section 2 */}
      <section className="section">
        <h2>Section 2 - Sum of Numbers</h2>
        <input type="number" ref={num1Ref} placeholder="Number 1" />
        <input type="number" ref={num2Ref} placeholder="Number 2" />
        <button onClick={handleSum}>Submit</button>
        <p ref={resultRef} className="result-text"></p>
      </section>

      {/* Section 3 */}
      <section className="section">
        <h2>Section 3 - Color Changer</h2>
        <p ref={helloRef} className="hello-text">Hello World</p>
        <input type="text" ref={colorRef} placeholder="Enter color" />
        <button onClick={changeColor}>Apply</button>
      </section>
    </div>
  );
}
