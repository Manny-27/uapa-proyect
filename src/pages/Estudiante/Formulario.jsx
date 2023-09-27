/* eslint-disable react/jsx-pascal-case */
//aqui ira la pagina del formulario del estudiante

// import React from 'react';

// const StudentFormularioPage = () => {
//   return (
//     <div>
//       <h1>Página de formulario para estudiantes</h1>
//       {/* Contenido de la página de formulario para estudiantes */}
//     </div>
//   );
// };

// export default StudentFormularioPage;

import React from "react";
import Header_uapa from "../../components/Header_uapa";
import Formulario from "../../components/Formulario";

const StudentFormularioPage = () => {
  return (
    <div>
      <Header_uapa />
      <Formulario />
    </div>
  );
};

export default StudentFormularioPage;