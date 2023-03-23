import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';

const NavBar = () => {
  const brand = './src/assets/harry-potter-vector-logo.png';
  return (
    <header className="header">
      <div className="logo-container">
        <img src={brand} alt="logo" />
      </div>
      <nav className='navbar'>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar