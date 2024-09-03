import React from 'react';
import './Tracks.css';
import AnimatedTitle from './AnimatedTitle';

// Import GIFs from the assets folder
import blockchain1 from '../assets/blockchain1.gif';
import cyber from '../assets/cyber.gif';
import ai1 from '../assets/ai1.gif';
import arvr1 from '../assets/arvr1.gif';
import innovation from '../assets/innovation.gif';

function Tracks() {
  return (
    <div id='Tracks'>
      <AnimatedTitle text="TRACKS" />
      <div className="images">
        <div className="tracks">
          <img src={blockchain1} alt="Web3 and Blockchain" />
          <h2>Web3 and Blockchain</h2>
        </div>
        <div className="tracks">
          <img src={cyber} alt="Cyber Security" />
          <h2>Cyber Security</h2>
        </div>
        <div className="tracks">
          <img src={ai1} alt="Artificial Intelligence" />
          <h2>Artificial Intelligence</h2>
        </div>
        <div className="tracks">
          <img src={arvr1} alt="AR/VR" />
          <h2>AR/VR</h2>
        </div>
        <div className="tracks">
          <img src={innovation} alt="Open Innovation" />
          <h2>Open Innovation</h2>
        </div>
      </div>
    </div>
  );
}

export default Tracks;
