import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaListAlt } from 'react-icons/fa'; // Importing an icon for service providers list
import './SideMenu.css';

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <Menu
      isOpen={isOpen}
      onStateChange={({ isOpen }) => toggleMenu(isOpen)}
      right // Display sidebar on the right side
      customBurgerIcon={false} // No default burger icon
    >
      <Link to="/" className="menu-item" onClick={() => toggleMenu(false)}>
        <FaHome className="menu-icon" /> الرئيسية
      </Link>
      <Link to="/register" className="menu-item" onClick={() => toggleMenu(false)}>
        <FaUserPlus className="menu-icon" /> تسجيل
      </Link>
      <Link to="/login" className="menu-item" onClick={() => toggleMenu(false)}>
        <FaSignInAlt className="menu-icon" /> دخول
      </Link>
      <Link to="/providers" className="menu-item" onClick={() => toggleMenu(false)}>
        <FaListAlt className="menu-icon" /> مقدمو الخدمة
      </Link>
      <Link to="/dashboard" className="menu-item" onClick={() => toggleMenu(false)}>
        <FaListAlt className="menu-icon" /> لوحة التحكم 
      </Link>
    </Menu>
  );
};

export default SideMenu;
