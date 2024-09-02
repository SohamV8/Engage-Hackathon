import React, { useEffect } from 'react';
import './Home.css';
import Countdown from './Countdown';

const Home = () => {
  useEffect(() => {
    let starCount = 200;
    let starSpeed = 1;
    const starField = document.getElementById('starField');

    function createStar() {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${(Math.random() * 3 + 2) / starSpeed}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      star.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      star.style.filter = `blur(${Math.random()}px)`;

      return star;
    }

    function initStarField() {
      starField.innerHTML = '';
      for (let i = 0; i < starCount; i++) {
        starField.appendChild(createStar());
      }
    }

    function addStars(num = 20) {
      for (let i = 0; i < num; i++) {
        starField.appendChild(createStar());
      }
      starCount += num;
    }

    function removeStars(num = 20) {
      const stars = starField.getElementsByClassName('star');
      for (let i = 0; i < Math.min(num, stars.length); i++) {
        starField.removeChild(stars[stars.length - 1]);
      }
      starCount = Math.max(0, starCount - num);
    }

    function adjustSpeed(factor) {
      starSpeed *= factor;
      const stars = starField.getElementsByClassName('star');
      for (let star of stars) {
        const currentDuration = parseFloat(star.style.animationDuration);
        star.style.animationDuration = `${currentDuration / factor}s`;
      }
    }

    function createShootingStar() {
      const shootingStar = createStar();
      shootingStar.style.width = '3px';
      shootingStar.style.height = '3px';
      shootingStar.style.backgroundColor = '#fff';
      shootingStar.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff';
      shootingStar.style.animation = `shooting-star 1s linear`;

      starField.appendChild(shootingStar);

      setTimeout(() => {
        starField.removeChild(shootingStar);
      }, 1000);
    }

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      starField.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });

    initStarField();

  }, []);

  return (
    <>
      <section className="section">
        <div className="star-field" id="starField"></div>
        <h1 className="main-title">Engage 3.0</h1>
        <h3 className="tagline">Hack · Engage · Build</h3>
      </section>
      <Countdown />
    </>
  );
}

export default Home;
