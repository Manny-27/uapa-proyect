import React, { useState } from "react";

const LoginForm = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("estudiante");
  const [crearCuenta, setCrearCuenta] = useState(false);

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

    // Aquí puedes realizar las acciones de autenticación y redireccionamiento
    console.log("Iniciar sesión:", usuario, contrasena, tipoUsuario);
  };

  const handleCrearCuenta = () => {
    if (tipoUsuario === "estudiante") {
      // Aquí puedes mostrar una advertencia de que solo se pueden crear cuentas para estudiantes
      console.log("Solo se pueden crear cuentas para estudiantes");
    } else {
      // Aquí puedes implementar la lógica para crear una cuenta de administrador
      console.log("Crear cuenta de administrador");
    }
  };

  return (
    <div className=" flex items-center justify-center min-h-90 bg-gray-100">
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

        <div className="mt-4">
          {/* <h2 className="text-lg font-semibold mb-2">Crear cuenta</h2>
          <p className="mb-2">Solo se pueden crear cuentas para estudiantes.</p>
          <button
            onClick={handleCrearCuenta}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Crear cuenta
          </button> */}
          {/* <p className="text-center mt-4">
                ¿No tienes una cuenta?{" "}
                <button
                  className="text-blue-500 hover:text-blue-700"
                  // onClick={toggleForm}
                >
                  Crear cuenta
                </button>
              </p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;