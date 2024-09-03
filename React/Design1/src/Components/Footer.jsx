import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <a href="https://www.instagram.com/ncumomentum/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://engage.ncuindia.edu/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/Pnrw4swZnK" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </li>
        <li>
          <a href="https://momentum.ncuindia.edu/" target="_blank" rel="noopener noreferrer">
            Momentum
          </a>
        </li>        
      </ul>
    </footer>
  );
}

export default Footer;
