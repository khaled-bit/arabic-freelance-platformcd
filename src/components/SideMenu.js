import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './SideMenu.css';

const SidebarMenu = styled(Menu)`
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }
  .bm-menu {
    background: linear-gradient(135deg, #ffc300, #ff5733);
    padding: 2em 1.5em;
    font-size: 1.2em;
    overflow: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .bm-item-list {
    color: #000;
    padding: 1em;
  }
  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 12px;
    padding: 10px 15px;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    transition: background 0.3s, transform 0.2s;
  }
  .bm-item:hover {
    background: rgba(255, 87, 51, 0.8);
    transform: scale(1.05);
  }
  .bm-burger-button {
    position: fixed;
    right: 20px;
    top: 20px;
    width: 36px;
    height: 30px;
  }
  .bm-burger-bars {
    background: #ff5733;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross {
    background: #fff;
  }
`;

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarMenu
      isOpen={isOpen}
      onStateChange={({ isOpen }) => toggleMenu(isOpen)}
      right // Display sidebar on the right
    >
      <Link to="/" className="menu-item" onClick={() => toggleMenu(false)}>
        الرئيسية
      </Link>
      <Link to="/register" className="menu-item" onClick={() => toggleMenu(false)}>
        تسجيل
      </Link>
      <Link to="/login" className="menu-item" onClick={() => toggleMenu(false)}>
        دخول
      </Link>
    </SidebarMenu>
  );
};

export default SideMenu;
