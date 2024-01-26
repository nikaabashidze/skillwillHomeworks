import React from 'react';

const ToggleThemeButton = ({ onClick }) => {
  return (
    <button className="toggle-theme-button" onClick={onClick}>
      Toggle Theme
    </button>
  );
};

export default ToggleThemeButton;