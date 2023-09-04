import React, { useEffect, useState } from "react";
import axios from "axios";
function Jackets() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products?category=Jackets")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>
        Jackets
        <ul>
          {product.map((product) => (
            <li hey={product.id}>
              <link to={`/product/${product.id}`} />
              <img src={product.photos} alt={product.name} />
              {product.name}-{product.price}
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
}

export default Jackets;
