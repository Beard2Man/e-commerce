import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../scss/layout/_cart.scss";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log("Cart data", cart);

  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((groupedItem) => groupedItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    console.log("photo", cart);
    return acc;
  }, []);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {groupedCart.map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              {item.photos.length >= 1 && <img src={item.photos[2]} />}
              {item.name} - Quantity:{item.quantity}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
