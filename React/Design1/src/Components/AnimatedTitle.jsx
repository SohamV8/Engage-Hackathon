import React, { useEffect, useRef } from 'react';
import './AnimatedTitle.css';

const AnimatedTitle = ({ text }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (!animationContainer.current) return;

    let textData = text;

    function splitWords() {
      const splitedText = textData.split(' ');
      splitedText.join('& &').split('&').forEach((e) => {
        const span = document.createElement('span');
        span.className = 'animated-word';
        span.setAttribute('data-text', e);
        animationContainer.current.appendChild(span);
      });
      splitLetters();
    }

    function splitLetters() {
      const animatedWords = animationContainer.current.querySelectorAll('.animated-word');
      animatedWords.forEach((e, i) => {
        e.getAttribute('data-text').split('').forEach((f, j) => {
          f = f === ' ' ? '&#32;' : f;
          const span = document.createElement('span');
          span.className = 'animated-element';
          span.setAttribute('aria-hidden', 'true');
          span.innerHTML = f;
          e.appendChild(span);
        });
        animate(e, i);
      });
    }

    function animate(e, i) {
      e.style.opacity = 1;
      e.classList.add('animate');
    }

    splitWords();

    return () => {
      if (animationContainer.current) {
        animationContainer.current.innerHTML = ''; // Cleanup on unmount
      }
    };
  }, [text]);

  const handleReplay = () => {
    const animatedWords = animationContainer.current.querySelectorAll('.animated-word');
    animatedWords.forEach((e, i) => {
      e.classList.remove('animate');
      e.style.opacity = 0;
      setTimeout(() => {
        animate(e, i);
      }, 500);
    });
  };

  return (
    <>
      <div className="animated-title" ref={animationContainer} aria-label={text}></div>
      <button className="button-replay" onClick={handleReplay}>Replay</button>
    </>
  );
};

export default AnimatedTitle;
