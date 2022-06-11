import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/1200px-Shop.svg.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item pre-last">
          <Link to="/product">Product</Link>
        </li>
        <li className="menu-item">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartPlus} />
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/signin">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
