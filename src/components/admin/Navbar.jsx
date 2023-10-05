import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiClipboard } from "react-icons/fi";
import logo from "../../data/Logo-uapa.png";
// import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// const LogoutButton = () => {
//   const history = useHistory();
// };

const Navbar = () => {
  const handleLinkClick = () => {
    // window.location.reload();
    // history.push("/Login");
  };



  return (
    <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-gray-800 text-white">
      <div className="px-6 py-4">
        <Link to="/">
          <img className="h-10 w-auto" src={logo} alt="Logo de la empresa" />
        </Link>
      </div>
      <hr className="border-gray-700" />
      <nav className="flex-grow px-6">
        <ul className="space-y-4 mt-4">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              <span className="mr-2">
                <FiHome />
              </span>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/estudiantes"
              className="flex items-center text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              <span className="mr-2">
                <FiUsers />
              </span>
              Estudiantes
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/solicitudes"
              className="flex items-center text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              <span className="mr-2">
                <FiClipboard />
              </span>
              Solicitudes
            </Link>
          </li>
        </ul>
      </nav>
      <button className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4 mt-8 mx-6" onClick={handleLinkClick}>
      <Link to="/Login"> Cerrar Sesión </Link>
    </button>
    </div>
  );
};

export default Navbar;