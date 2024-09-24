import React, { useState } from 'react';
import './Header.css';
import ehlogo from '../assets/ehlogo.svg';
import MOM_LOGO from '../assets/MOM_LOGO.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={ehlogo} alt="logo" />
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={isMenuOpen ? 'open' : ''}></span>
        <span className={isMenuOpen ? 'open' : ''}></span>
        <span className={isMenuOpen ? 'open' : ''}></span>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about">About Us</a>
        <a href="#Tracks">Tracks</a>
        <a href="#Sponsors">Sponsors</a>
        <a href="#FAQ">FAQ</a>
        <div className="menu-logo">
          <img src={ehlogo} alt="logo" />
        </div>
        <a href="https://momentum.ncuindia.edu/" target="_blank" rel="noopener noreferrer">
          <img src={MOM_LOGO} alt="momentum" className="momentum-logo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
