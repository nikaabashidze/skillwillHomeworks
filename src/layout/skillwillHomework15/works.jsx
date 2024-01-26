import React from 'react';
import ToggleThemeButton from '../../components/button/ToggleThemeButton';
import { useLocalStorage, useWindowSize } from '../../hooks/hook1';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const windowSize = useWindowSize();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme} ${windowSize.width < 768 ? 'mobile' : 'desktop'}`}>
      
      <ToggleThemeButton onClick={toggleTheme} />
      {}
    </div>
  );
};

export default App;