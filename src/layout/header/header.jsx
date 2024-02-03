import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import codinglogo from '../../assets/image/codingLogo.png'
import './header.css';

function App() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="header">
      <button className="side-button" onClick={toggleNav}>
        ☰
      </button>
      <div className="logo"><img src={codinglogo} alt="" id='carlogo' /></div>
      <nav className={`nav ${navActive ? 'active' : ''}`}>
        <ul>
        <Link to="/skillwillHomeworks">HOME</Link>
        <Link to="/homework">HOMEWORK</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      <Outlet />
        </ul>
      </nav>
    </div>
  );
}

export default App;
