import React, { useEffect, useState } from "react";
import axios from "axios";

import "../scss/base/_global.scss";
import "../scss/layout/_productsLists.scss";

function Pants() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products?category=Pants")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="service-container container">
      Pants
      <div className="mainProductContainer row">
        <div className="main">
          <div className="productContainer">
            <ul>
              {product.map((product) => (
                <li hey={product.id}>
                  <link to={`/product/${product.id}`} />
                  <img src={product.photos} alt={product.name} />
                  {product.name}-{product.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pants;
