import React from 'react';
import './Header.css';
import ehlogo from '../assets/ehlogo.svg'; // Correct import syntax
import MOM_LOGO from '../assets/MOM_LOGO.png'; // Correct import syntax

function Header() {
  return (
    <header className="header">
      <a href="App.jsx" className="logo">
        <img src={ehlogo} alt="logo" /> {/* Use img tag for SVG files */}
      </a>

      <nav className="navbar">
        <a href="#about">About Us</a>
        <a href="#Tracks">Tracks</a>
        <a href="#Sponsors">Sponsors</a>
        <a href="#FAQ">FAQ</a>
      </nav>

      <a href="https://momentum.ncuindia.edu/" target="_blank" rel="noopener noreferrer" className="logo">
        <img src={MOM_LOGO} alt="momentum" />
      </a>
    </header>
  );
}

export default Header;
