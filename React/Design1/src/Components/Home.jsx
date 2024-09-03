import React, { useEffect } from 'react';
import './Home.css';
import Countdown from './Countdown';

const Home = () => {
  return (
    <>
      <section className="section">
        <h1 className="main-title">Engage 3.0</h1>
        <h3 className="tagline">Hack · Engage · Build</h3>
      </section>
      <Countdown />
    </>
  );
}

export default Home;
