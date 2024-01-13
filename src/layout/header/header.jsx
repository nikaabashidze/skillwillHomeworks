import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import carlogo from '../../assets/image/carlogo.png'
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
      <div className="logo"><img src={carlogo} alt="" id='carlogo' /></div>
      <nav className={`nav ${navActive ? 'active' : ''}`}>
        <ul>
        <Link to="/">HOME</Link>
        <Link to="/tours">TOURS</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;