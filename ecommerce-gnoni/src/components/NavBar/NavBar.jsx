import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  const brand = url('https://i.postimg.cc/S2q6N5pw/harry-potter-vector-logo.jpg');
  return (
    <header className="header">
      <Link className="navbar-brand" to="/">
        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>
      </Link>
      <nav className="navbar">
        <ul className="nav-container">
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/Varitas">
              Varitas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/Bufandas">
              Bufandas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/Varios">
              Varios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cartContainer">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
