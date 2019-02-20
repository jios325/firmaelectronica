import React from 'react';
import logo from '../logocorporativo.png';
const Header = () => {
  return ( 
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt=""/>
      </div>
      <div className="header__title">
        <h1>Generador de Firmas ● OASIS HOTELES & RESORTS</h1>
      </div>
    </header>
  );
}
 
export default Header;