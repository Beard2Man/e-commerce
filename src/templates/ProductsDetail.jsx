import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../scss/base/_buttons.scss";
import "../scss/base/_global.scss";

function ProductDetails() {
  const { category, id } = useParams();

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products_${category}/${id}`)
      .then((response) => {
        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setProduct(data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <link to={`/product/${product.id}`} />
              <div className="imgFlip">
                <a href={`/product/${category}/${product.id}`}>
                  {product.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${product.name}-${index + 1}`}
                      className={index === 0 ? "img-front" : "img-back"}
                    />
                  ))}
                  {/* <img
                    src={product.photos}
                    alt={product.name}
                    className="img-front"
                  />
                  <img
                    src={product.photos}
                    alt={product.name}
                    className="img-back"
                  /> */}
                </a>
              </div>
              <h3>{product.name}</h3>
              <div className="wrapper">
                <h4 className="d1">{product.information}</h4>
              </div>
              <p>${product.price}</p>

              <button className="addToCard">Add to card</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
