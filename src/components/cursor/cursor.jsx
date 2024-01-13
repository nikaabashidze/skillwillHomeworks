import './cursor.css';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.set('.ball', { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      gsap.to('.ball', { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const scaleValue = isHovered ? 4.5 : 1;
    const opacityValue = isHovered ? 0.1 : 0.6;
    gsap.to('.ball', { scale: scaleValue, opacity: opacityValue, duration: 0.3 });
  }, [isHovered]);

  const handleLinkMouseEnter = () => {
    setIsHovered(true);
  };

  const handleLinkMouseLeave = () => {
    setIsHovered(false);
  };

  // Attach event listeners to links
  useEffect(() => {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkMouseEnter);
      link.addEventListener('mouseleave', handleLinkMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkMouseEnter);
        link.removeEventListener('mouseleave', handleLinkMouseLeave);
      });
    };
  }, []); // Ensure this effect runs only once during mount

  return (
    <div className={`ball ${isHovered ? 'hovered' : ''}`}></div>
  );
};

export default Cursor;
