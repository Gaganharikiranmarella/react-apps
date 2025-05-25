import React, { useState } from "react";
import "./App10.css";

const products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Notebook", price: 50 },
  { id: 3, name: "Pencil", price: 5 },
  { id: 4, name: "Eraser", price: 8 },
  { id: 5, name: "Ruler", price: 12 },
];

export default function ProductCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="App-Container">
      <h2>Products</h2>
      <div className="Product-List">
        {products.map((product) => (
          <div key={product.id} className="Product-Card">
            <span>{product.name}</span>
            <span>₹{product.price}</span>
            <button onClick={() => addToCart(product)}>Add</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Cart-Container">
          <h3>My Cart</h3>
          {cart.map((item) => (
            <div key={item.id} className="Cart-Item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <div className="Qty-Controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          ))}
          <h4>Total: ₹{total}</h4>
        </div>
      )}
    </div>
  );
}
