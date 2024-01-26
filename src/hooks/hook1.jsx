import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);

  // If it's a mobile device, always use the light theme
  const isMobile = window.innerWidth < 768;
  const initial = isMobile ? 'light' : storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [isMobile ? 'light' : value, setValue];
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};