import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../data/Logo-uapa.png';

const Header_uapa = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo de la empresa" width="150" height="125" style={{ paddingLeft: '10px' }} />
        </Link>
      </div>
    </header>
  );
};

export default Header_uapa;