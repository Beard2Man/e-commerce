import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

import { CartContext } from "../templates/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/immutable/img/Logo.png";

import "../scss/layout/_navigation.scss";
import { Link } from "react-router-dom";

function Navigation() {
  const [tabs, setTabs] = useState([]);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { cart } = useContext(CartContext);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/tabs")
      .then((response) => {
        setTabs(response.data);
      })
      .catch((err) => {
        setError(err);
        console.error("API data download error", err);
      });
  }, []);
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>

      <div className={`nav-links ${isMenuOpen ? "mobile-menu" : ""}`}>
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <a href={tab.url} onClick={() => handleCategorySelect(tab.name)}>
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/cart" className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        {cart.length > 0 && <span className="item-count">{cart.length}</span>}
      </Link>
      <FontAwesomeIcon
        icon={isMenuOpen ? faTimes : faBars}
        className="menu-hamburger"
        onClick={handleMenuToggle}
      />
    </nav>
  );
}

export default Navigation;
