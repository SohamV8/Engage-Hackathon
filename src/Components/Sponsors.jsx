import React from 'react';
import './Sponsors.css';
import AnimatedTitle from './AnimatedTitle';

// Import sponsor images from assets
import devfolio from '../assets/devfolio.png';
import poly from '../assets/poly.png';
import woldram from '../assets/woldram.png';
import bee from '../assets/bee.png';
import sticker from '../assets/sticker.png';
import echo from '../assets/echo.png';
import rosen from '../assets/rosen.webp';
import replit from '../assets/replit.png';
import gdsc1 from '../assets/gdsc1.png';
import gdg from '../assets/gdg.png';
import gdscncut from '../assets/gdscncut.png';

function Sponsors() {
  return (
    <div id='Sponsors'>
      <AnimatedTitle text="SPONSORS" />
      <div className="sponsors-flex">
        
        {/* <div className="sponsorship">
          <h1 className='gold'>Gold Sponsors</h1>
          <div className="images-sponsors">
            <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer">
              <img src={devfolio} alt="Gold Sponsor 1" />
            </a>
            <a href="https://www.polygon.technology/" target="_blank" rel="noopener noreferrer">
              <img src={poly} alt="Gold Sponsor 2" />
            </a>
          </div>
        </div>

        <div className="sponsorship">
          <h1 className='silver'>Silver Sponsors</h1>
          <div className="images-sponsors">
            <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer">
              <img src={woldram} alt="Silver Sponsor 1" />
            </a>
            <a href="https://beeceptor.com/" target="_blank" rel="noopener noreferrer">
              <img src={bee} alt="Silver Sponsor 2" />
            </a>
            <a href="https://www.stickermule.com/" target="_blank" rel="noopener noreferrer">
              <img src={sticker} alt="Silver Sponsor 3" />
            </a>
            <a href="https://www.echo3d.com/" target="_blank" rel="noopener noreferrer">
              <img src={echo} alt="Silver Sponsor 4" />
            </a>
            <a href="https://rosenfeldmedia.com/" target="_blank" rel="noopener noreferrer">
              <img src={rosen} alt="Silver Sponsor 5" />
            </a>
            <a href="https://replit.com/" target="_blank" rel="noopener noreferrer">
              <img src={replit} alt="Silver Sponsor 6" />
            </a>
          </div>
        </div>

        <div className="sponsorship">
          <h1 className='community'>Community Partners</h1>
          <div className="images-sponsors">
            <a href="https://gdsc.community.dev/institute-of-engineering-management-kolkata-india/" target="_blank" rel="noopener noreferrer">
              <img src={gdsc1} alt="Community Partner 1" />
            </a>
            <a href="https://gdg.community.dev/gdg-gurugram/" target="_blank" rel="noopener noreferrer">
              <img src={gdg} alt="Community Partner 2" />
            </a>
            <a href="https://gdsc.community.dev/netaji-subhas-university-of-technology-delhi-india/" target="_blank" rel="noopener noreferrer">
              <img src={gdscncut} alt="Community Partner 3" />
            </a>
          </div>
        </div> */}

<h1 className='gold'>COMING SOON</h1>


      </div>
    </div>
  );
}

export default Sponsors;
