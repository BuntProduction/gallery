import React, { useEffect } from 'react';
import './css/AnimatedRectangle.css';

const AnimatedRectangle = () => {
  useEffect(() => {
    const handleScroll = () => {
      const rectangle = document.querySelector('.rectangle');
      const scrollPosition = window.scrollY;
      const isMobile = window.innerWidth < 768;
      const startFixingPoint = isMobile ? 170 : 300;
      const initialWidth = 80;
      const initialHeight = 50;
      const finalWidth = isMobile ? window.innerWidth : window.innerWidth * 0.9;
      const finalHeight = window.innerHeight * 0.5;
      const fixedY = window.innerHeight / 2 - finalHeight / 2;
      const finalX = isMobile ? 0 : (window.innerWidth - finalWidth) / 2;

      if (!rectangle) return;

      if (scrollPosition <= startFixingPoint) {
        const progress = scrollPosition / startFixingPoint;
        const currentWidth = Math.max(initialWidth, initialWidth + progress * (finalWidth - initialWidth));
        const currentHeight = Math.max(initialHeight, initialHeight + progress * (finalHeight - initialHeight));
        const currentX = progress * finalX;
        const currentY = progress * fixedY;
        rectangle.style.width = `${currentWidth}px`;
        rectangle.style.height = `${currentHeight}px`;
        rectangle.style.transform = `translate(${currentX}px, ${currentY}px)`;
      } else {
        rectangle.style.width = `${finalWidth}px`;
        rectangle.style.height = `${finalHeight}px`;
        rectangle.style.transform = `translate(${finalX}px, ${fixedY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="rectangle"></div>
    </div>
  );
};

export default AnimatedRectangle;
