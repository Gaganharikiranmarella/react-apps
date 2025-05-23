import "./Calc.css";

export default function Calc({ v1, v2 }) {
  return (
    <div className="calc-container">
      <span>Value 1: {v1}</span>
      <span>Value 2: {v2}</span>
      <span>Sum: {v1 + v2}</span>
    </div>
  );
}
