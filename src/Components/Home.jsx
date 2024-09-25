import React from 'react';
import './Home.css';
import Countdown from './Countdown';

const Home = () => {
  const targetDate = 'Oct 21, 2024 23:59:59';
  
  return (
    <div className="home">
      <section className="section">
        <div className="text-main-home">
        <h1 className="main-title">Engage 4.0</h1>
        <h3 className="tagline">Hack · Engage · Build</h3>
        </div>
        <Countdown targetDate={targetDate} />
      </section>
    </div>
  );
}

export default Home;
