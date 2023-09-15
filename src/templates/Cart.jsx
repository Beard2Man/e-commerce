import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../scss/layout/_cart.scss";

function Cart() {
  const { removeFromCart } = useContext(CartContext);
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
  const removeFromShop = (item) => {
    removeFromCart(item);
    console.log("Dodano produkt do koszyka:", item);
  };
  const sum = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div className="container cart">
      <ul>
        <h1>Cart</h1>
        {groupedCart.map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              <div>
                {item.photos.length >= 1 && <img src={item.photos[2]} />}
              </div>
              {item.name} - Quantity:{item.quantity} {item.price}
              <div>{sum(item)}</div>
              <button
                className="removeFromCart"
                onClick={() => removeFromShop(item.id)}
              >
                Remove From Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
