import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../scss/layout/_productsLists.scss";
import "../scss/layout/_sale.scss";
import "../scss/base/_buttons.scss";
import "../scss/base/_global.scss";

function Sale() {
  const [sale, setSale] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/sale")
      .then((res) => setSale(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="service-container container">
      <div className="containerName"></div>
      <div className="mainProductContainer row">
        <div className="main">
          <div className="productContainer">
            <ul>
              {sale.map((sale) => (
                <li key={sale.id}>
                  <link to={`/sale/${sale.id}`} />
                  <div className="imgFlip">
                    <a href={`/sale/${sale.sale}/${sale.name}`}>
                      <img
                        src={sale.photos}
                        alt={sale.name}
                        className="img-front"
                      />
                      <img
                        src={sale.photos[2]}
                        alt={sale.name}
                        className="img-back"
                      />
                    </a>
                  </div>
                  <h3>{sale.name}</h3>
                  <div className="wrapper">
                    <h4 className="d1">{sale.information}</h4>
                  </div>
                  <p>${sale.price}</p>

                  <button className="addToCard">Add to card</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Sale;
