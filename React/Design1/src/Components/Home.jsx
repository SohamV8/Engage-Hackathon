import React from 'react';
import './Home.css';
import Countdown from './Countdown';

const Home = () => {
  const targetDate = 'Dec 31, 2024 23:59:59';
  
  return (
    <div className="home">
      <section className="section">
        <h1 className="main-title">Engage 3.0</h1>
        <h3 className="tagline">Hack · Engage · Build</h3>
        <Countdown targetDate={targetDate} />
      </section>
    </div>
  );
}

export default Home;
