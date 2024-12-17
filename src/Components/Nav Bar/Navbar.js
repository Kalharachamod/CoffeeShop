import React from 'react';
import { FaShoppingCart, FaSearch, FaCoffee } from 'react-icons/fa'; // Importing React Icons
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          {/* Logo with white color */}
          <a href="#" className="navbar-logo">
            <FaCoffee className="logo-icon" />
          </a>
        </div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Customers</a></li>
        </ul>
        <div className="navbar-right">
          <FaShoppingCart className="icon cart-icon" />
          <FaSearch className="icon search-icon" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
