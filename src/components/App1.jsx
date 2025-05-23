import "./App1.css";
import Product from "./Product";
import Variant from "./Variant";
import Calc from "./Calc";

export default function App1() {
  let a = 10;
  let b = 20;
  return (
    <div className="app1-container">
      <h1 className="app1-title">This is App1 Component</h1>
      <div className="component-wrapper">
        <Product name="Laptop" price={45000} />
      </div>
      <div className="component-wrapper">
        <Variant />
      </div>
      <div className="component-wrapper">
        <Calc v1={a} v2={b} />
      </div>
    </div>
  );
}
