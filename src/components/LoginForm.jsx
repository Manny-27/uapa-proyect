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
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Tipo de usuario:
          <select value={tipoUsuario} onChange={handleChangeTipoUsuario}>
            <option value="estudiante">Estudiante</option>
            <option value="administrador">Administrador</option>
          </select>
        </label>

        <label>
          Usuario:
          <input
            type="text"
            value={usuario}
            onChange={handleChangeUsuario}
            required
          />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            value={contrasena}
            onChange={handleChangeContrasena}
            required
          />
        </label>

        <button type="submit">Iniciar sesión</button>
      </form>

      <div>
        <h2>Crear cuenta</h2>
        <p>Solo se pueden crear cuentas para estudiantes.</p>
        <button onClick={handleCrearCuenta}>Crear cuenta</button>
      </div>
    </div>
  );
};

export default LoginForm;