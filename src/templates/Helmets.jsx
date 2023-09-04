import React, { useEffect, useState } from "react";
import axios from "axios";
function Helmets() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products?category=Helmets")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>
        Helments
        <ul>
          {product.map((product) => (
            <li hey={product.id}>
              <link to={`/product/${product.id}`} />
              <img src={product.photos[0]} alt={product.name} />
              {product.name}-{product.price}
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
}

export default Helmets;
