import React from 'react';
import './About.css';
import whitencu from '../assets/whitencu.png';
import MOM_LOGO from '../assets/MOM_LOGO.png';

function About() {
  return (
    <div id="about">
      <div className="logo-about">
        <img src={whitencu} alt="Engage Hackathon Logo" />
        <img src={MOM_LOGO} alt="Momentum Logo" />
      </div>
      <p className="about-p">
        The Engage Hackathon stands at the core of our Annual Techno-Cultural fest, Momentum. Through this hackathon, students not only get to showcase their skills but ignite their passion for innovation. They learn from the masters of industry, forge unbreakable bonds, and delve into the boundless realm of creativity and technology. Engage Hackathon, more than an event, is a captivating journey that propels you to push the boundaries, shatter limits, and unite with the brightest minds in the field. Engage 4.0 awaits you, unfolding on November 22nd - 23rd October, 2024.
      </p>
    </div>
  );
}

export default About;
