import React, { useState } from "react";

const SignUpForm = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const handleChangeUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleChangeContrasena = (e) => {
    setContrasena(e.target.value);
  };

  const handleChangeConfirmarContrasena = (e) => {
    setConfirmarContrasena(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones de creación de cuenta
    console.log("Crear cuenta:", usuario, contrasena);
  };

  return (
    <div className="flex items-center justify-center min-h-90 bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Crear cuenta</h2>
        <p className="text-center mb-4">Solo se pueden crear cuentas para estudiantes.</p>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="usuario" className="block font-semibold mb-2">
              Usuario:
            </label>
            <input
              type="text"
              id="usuario"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={usuario}
              onChange={handleChangeUsuario}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contrasena" className="block font-semibold mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="contrasena"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={contrasena}
              onChange={handleChangeContrasena}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmarContrasena" className="block font-semibold mb-2">
              Confirmar contraseña:
            </label>
            <input
              type="password"
              id="confirmarContrasena"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={confirmarContrasena}
              onChange={handleChangeConfirmarContrasena}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;