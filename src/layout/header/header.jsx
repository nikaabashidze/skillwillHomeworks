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
        <Link to="/skillwillHomeworks/home">HOME</Link>
        <Link to="/skillwillHomeworks/homework">HOMEWORK</Link>
        <Link to="/skillwillHomeworks/about">ABOUT</Link>
        <Link to="/skillwillHomeworks/contact">CONTACT</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
