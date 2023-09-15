import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./CartContext";
import "../scss/base/_buttons.scss";
import "../scss/base/_global.scss";
import "../scss/layout/_productsLists.scss";

function Category() {
  const { addToCart } = useContext(CartContext);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${category}`)
      .then((response) => {
        console.log(response.data);

        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Błąd zapytania:", error);
      });
  }, [category]);
  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Dodano produkt do koszyka:", product);
  };
  return (
    <section className="service-container container">
      <div className="containerName">{category}</div>
      <div className="mainProductContainer row">
        <div className="main">
          <div className="productContainer">
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Link to={`/product/${product.id}`} />
                  <div className="imgFlip">
                    <a href={`/product/${category}/${product.id}`}>
                      <img
                        src={product.photos}
                        alt={product.name}
                        className="img-front"
                      />
                      <img
                        src={product.photos[2]}
                        alt={product.name}
                        className="img-back"
                      />
                    </a>
                  </div>
                  <h3>{product.name}</h3>
                  <div className="wrapper">
                    <h4 className="d1">{product.information}</h4>
                  </div>
                  <p>${product.price}</p>

                  <button
                    className="addToCard"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to card
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  // return (
  //   <div>
  //     <h2>
  //       Products List: {category}
  //       {products.name}
  //     </h2>

  //     <ul>
  //       {products.map((category) => (
  //         <li key={category.id}>
  //           <a href={`/product/${category.id}`}>
  //             <img src={category.photos} alt={category.name} />-{" "}
  //             {category.price}
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default Category;
