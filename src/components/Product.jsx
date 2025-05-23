import "./Product.css";

export default function Product({ name, price }) {
  return (
    <div className="product-container">
      <span>Product Name: {name}</span>
      <span>Price: ₹{price}</span>
    </div>
  );
}
