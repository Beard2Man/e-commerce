import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);

  const addToCart = (productId) => {
    const updateCart = [...cart, productId];
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    console.log("Updated cart", updateCart);
  };

  const removeFromCart = (productId) => {
    const updateCart = cart.filter((item) => item.id !== productId);
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export { CartContext, CartProvider };
export default CartProvider;
