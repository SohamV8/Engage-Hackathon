import React from 'react';
import './Sponsors.css';
import AnimatedTitle from './AnimatedTitle'; // Assuming AnimatedTitle is in the same directory

function Sponsors() {
  return (
    <div id='Sponsors'>
      <AnimatedTitle text="SPONSORS" />
      <div className="sponsors-flex">
      <div className="sponsorship">
        <AnimatedTitle text="Gold Sponsors" />
        <img src="" alt="Gold Sponsor 1" />
        <img src="" alt="Gold Sponsor 2" />
      </div>
      <div className="sponsorship">
        <AnimatedTitle text="Silver Sponsors" />
        <img src="" alt="Silver Sponsor 1" />
        <img src="" alt="Silver Sponsor 2" />
        <img src="" alt="Silver Sponsor 3" />
        <img src="" alt="Silver Sponsor 4" />
        <img src="" alt="Silver Sponsor 5" />
        <img src="" alt="Silver Sponsor 6" />
      </div>
      <div className="sponsorship">
        <AnimatedTitle text="Community Partners" />
        <img src="" alt="Community Partner 1" />
        <img src="" alt="Community Partner 2" />
        <img src="" alt="Community Partner 3" />
      </div>
      </div>
    </div>
  );
}

export default Sponsors;
