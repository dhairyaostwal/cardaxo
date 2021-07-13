import React from 'react';
import fampayLogo from '../../img/fampaylogo.png';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="fampay--logo">
      <img src={fampayLogo} />
    </div>
  );
}
