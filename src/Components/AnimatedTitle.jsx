import React, { useEffect, useRef } from 'react';
import './AnimatedTitle.css';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedTitle = ({ text, color }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (!animationContainer.current) return;

    function animateText() {
      const span = document.createElement('span');
      span.className = 'animated-word';
      span.setAttribute('data-text', text);
      span.innerText = text;
      animationContainer.current.appendChild(span);

      animate(span);
    }

    function animate(element) {
      element.style.opacity = 1;
      element.classList.add('animate');

      // Add letter scrambling effect on hover
      element.onmouseover = event => {
        let iteration = 0;
        let interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.text.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };
    }

    animateText();

    return () => {
      if (animationContainer.current) {
        animationContainer.current.innerHTML = ''; // Cleanup on unmount
      }
    };
  }, [text]);

  return (
    <div 
      className="animated-title" 
      ref={animationContainer} 
      aria-label={text} 
      style={{ color: color }} // Dynamically set the color
    ></div>
  );
};

export default AnimatedTitle;
