/** @format */

import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);
  return (
    <div style={{ padding: "20px"}}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item.title.slice(0, 30)}... - ${item.price}
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  style={{ marginLeft: '10px', color: 'white', backgroundColor: 'red' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
