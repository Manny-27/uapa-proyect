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
    <div>
      <h1>Crear cuenta</h1>
      <p>Solo se pueden crear cuentas para estudiantes.</p>
      <form onSubmit={handleSignUp}>
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

        <label>
          Confirmar contraseña:
          <input
            type="password"
            value={confirmarContrasena}
            onChange={handleChangeConfirmarContrasena}
            required
          />
        </label>

        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default SignUpForm;