import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Header.css';
import { FiScissors } from 'react-icons/fi'; // Replaced with FiScissors icon from Feather icons
import { FaBars } from 'react-icons/fa'; // Hamburger icon for the toggle menu

const Header = ({ toggleMenu }) => {
  const location = useLocation(); // Get the current location

  return (
    <header className="custom-header">
      <div className="container">
        <div className="logo">
          <FiScissors size={30} className="sewing-icon" />
          <span className="website-name">فتلة</span>
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/register">تسجيل</Link></li>
            <li><Link to="/login">دخول</Link></li>
          </ul>
        </nav>
        {/* Conditionally render the menu-toggle button */}
        {location.pathname !== '/dashboard' && (
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <FaBars />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
