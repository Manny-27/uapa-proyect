import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import avatar from '../../data/avatar.jpg';
import logo from "../../data/Logo-uapa.png";

const HeaderAdmin = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 shadow">
      <div className="flex items-center">
        <button
          className="text-gray-600 focus:outline-none mr-4"
          onClick={toggleNavbar}
        >
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
            className="h-8 w-auto"
            // eslint-disable-next-line no-undef
            src={logo}
            alt="Logo de la empresa"
          />
        </Link>
      </div>

      <div className="flex items-center ml-auto">
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

      {<Navbar />}
    </header>
  );
};

export default HeaderAdmin;