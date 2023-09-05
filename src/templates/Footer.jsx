import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

import "../scss/layout/_footer.scss";

function Footer() {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/footer").then((response) => {
      setFooter(response.data);
    });
  }, []);

  return (
    <div>
      <div className="footer">
        <div className="footerLinks">
          <ul>
            {footer.map((fot) => (
              <li key={fot.id}>
                <a href={fot.url} className="footerLinkItems">
                  {fot.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
