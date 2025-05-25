import React, { useState } from "react";
import "./App10.css";

const products = [
  { id: 1, name: "Product - 1", price: 100.34 },
  { id: 2, name: "Product - 2", price: 50.66 },
  { id: 3, name: "Product - 3", price: 5.91 },
  { id: 4, name: "Product - 4", price: 8.09 },
  { id: 5, name: "Product - 5", price: 120 },
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
          <h4>Total: ${total}</h4>
        </div>
      )}
    </div>
  );
}
