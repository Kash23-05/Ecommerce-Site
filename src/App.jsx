/** @format */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Cart from "./Components/Cart.jsx";
import ProductList from "./Components/ProductList.jsx";
import ProductDetails from './Components/ProductDetails.jsx';
import Checkout from './Components/Checkout.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };
  const removeFromCart = (id) => {
  const updatedCart = cart.filter(item => item.id !== id);
  setCart(updatedCart);
};
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<ProductList addToCart={addToCart} />} />
      <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        </Router>
      );
    }
    
    export default App;

