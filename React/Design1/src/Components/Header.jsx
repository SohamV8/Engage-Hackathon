import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <a href="App.jsx" className="logo">
        <img src="" alt="logo" />
      </a>

      <nav className="navbar">
        <a href="#about">About Us</a>
        <a href="#Tracks">Tracks</a>
        <a href="#Sponsors">Sponsors</a>
        <a href="#FAQ">FAQ</a>
      </nav>

      <a href="https://momentum.ncuindia.edu/" target="_blank" rel="noopener noreferrer" className="logo">
        <img src="" alt="momentum" />
      </a>
    </header>
  );
}

export default Header;
