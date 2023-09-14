import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useParams } from "react-router-dom";
import { CartProvider } from "./templates/CartContext";
import Cart from "./templates/Cart";

import Navigation from "./mainPages/Navigation";
import Category from "./templates/Category";
import Footer from "./templates/Footer";
import Home from "../src/mainPages/Home";
import ProductDetails from "./templates/ProductsDetail";
import React, { useEffect, useState } from "react";

function App() {
  const { category, id } = useParams();
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart data", cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <div>
            <Navigation />
            <Routes>
              <Route path="/:category" element={<Category />} />
              <Route
                path="/:product/:category/:id"
                element={<ProductDetails />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </CartProvider>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
