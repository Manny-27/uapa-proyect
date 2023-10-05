import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const LoginForm = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("estudiante");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChangeTipoUsuario = (e) => {
    setTipoUsuario(e.target.value);
  };

  const handleChangeUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleChangeContrasena = (e) => {
    setContrasena(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones de autenticación
    console.log("Iniciar sesión:", usuario, contrasena, tipoUsuario);

    setLoggedIn(true);
  };

  if (loggedIn) {
    if (tipoUsuario === "estudiante") {
      return <Redirect to="/estudiante/formulario" />;
    } else if (tipoUsuario === "administrador") {
      return <Redirect to="/dashboard" />;
    }
  }

  return (
    <div className="flex items-center justify-center min-h-90 bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="tipoUsuario" className="block font-semibold">
              Tipo de usuario:
            </label>
            <select
              id="tipoUsuario"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={tipoUsuario}
              onChange={handleChangeTipoUsuario}
            >
              <option value="estudiante">Estudiante</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="usuario" className="block font-semibold">
              Usuario:
            </label>
            <input
              type="text"
              id="usuario"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={usuario}
              onChange={handleChangeUsuario}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contrasena" className="block font-semibold">
              Contraseña:
            </label>
            <input
              type="password"
              id="contrasena"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={contrasena}
              onChange={handleChangeContrasena}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;