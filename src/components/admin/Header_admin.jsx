
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../data/Logo-uapa.png';
import avatar from '../../data/avatar.jpg'

const Header = () => {
  return (
    <header className="flex items-center justify-between  py-4 px-6 shadow">
      <div className="flex items-center">
        <button className="text-gray-600 focus:outline-none mr-4">
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 12h18m-18-7h18M3 19h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Link to="/">
        <img
          // className="h-8 w-auto"
          src={logo}
          alt="Logo de la empresa"  width="150" height="125" style={{ paddingLeft: '10px' }}
        />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="mr-4">
        <p className="font-semibold text-white">Nombre del Administrador</p>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={avatar}
            alt="Imagen del Administrador"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;