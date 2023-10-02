import React, { useState } from "react";
import "./formulario.css"; // Importa el archivo CSS de estilos
import axios from 'axios';

const Formulario = () => {

  const [Form, setFormData] = useState({
    FaltaPasantia:'',
    RealizoServicioSocial:'',
    Recinto:'',
    MatriculaID:'',
    NombreCompleto:'',
    Sexo:'',
    PeriodoAcademico:'',
    MateriasOptativas:'',
    Carrera:'',
    Direccion:'',
    Sector:'',
    Municipio:'',
    Provincia:'',
    Celular:'',
    Telefono:'',
    Cedula:'',
    NombreEmpresa:'',
    Rnc:'',
    DireccionEmpresa:'',
    SectorEmpresa:'',
    MunicipioEmpresa:'',
    ProvinciaEmpresa:'',
    TelefonoEmpresa:'',
    Extension:'',
    CelularEmpresa:'',
    NaturalezaEmpresa:'',
    ContactoEmpresa:'',
    DepartamentoPasantia:'',
    EmailEmpresa:''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...Form,
      [id]: value,
    });
  }

  

  // const [faltaPasantia, setFaltaPasantia] = useState("");
  // const [realizoServicioSocial, setRealizoServicioSocial] = useState("");
  // const [recinto, setRecinto] = useState("");
  // const [matriculaID, setMatriculaID] = useState("");
  // const [nombreCompleto, setNombreCompleto] = useState("");
  // const [sexo, setSexo] = useState("");
  // const [periodoAcademico, setPeriodoAcademico] = useState("");
  // const [materiasOptativas, setMateriasOptativas] = useState("");
  // const [carrera, setCarrera] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [sector, setSector] = useState("");
  // const [municipio, setMunicipio] = useState("");
  // const [provincia, setProvincia] = useState("");
  // const [celular, setCelular] = useState("");
  // const [telefono, setTelefono] = useState("");
  // const [cedula, setCedula] = useState("");
  // const [nombreEmpresa, setNombreEmpresa] = useState("");
  // const [rnc, setRnc] = useState("");
  // const [direccionEmpresa, setDireccionEmpresa] = useState("");
  // const [sectorEmpresa, setSectorEmpresa] = useState("");
  // const [municipioEmpresa, setMunicipioEmpresa] = useState("");
  // const [provinciaEmpresa, setProvinciaEmpresa] = useState("");
  // const [telefonoEmpresa, setTelefonoEmpresa] = useState("");
  // const [extension, setExtension] = useState("");
  // const [celularEmpresa, setCelularEmpresa] = useState("");
  // const [naturalezaEmpresa, setNaturalezaEmpresa] = useState("");
  // const [contactoEmpresa, setContactoEmpresa] = useState("");
  // const [departamentoPasantia, setDepartamentoPasantia] = useState("");
  // const [emailEmpresa, setEmailEmpresa] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Form);
    axios.post('http://localhost:3001/registroPasantia',Form, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
    };

    // Aquí puedes realizar las acciones necesarias con los datos del formulario

    // // Por ejemplo, puedes imprimir los datos en la consola
    // console.log({
    //   faltaPasantia,
    //   realizoServicioSocial,
    //   recinto,
    //   matriculaID,
    //   nombreCompleto,
    //   sexo,
    //   periodoAcademico,
    //   materiasOptativas,
    //   carrera,
    //   direccion,
    //   sector,
    //   municipio,
    //   provincia,
    //   celular,
    //   telefono,
    //   cedula,
    //   nombreEmpresa,
    //   rnc,
    //   direccionEmpresa,
    //   sectorEmpresa,
    //   municipioEmpresa,
    //   provinciaEmpresa,
    //   telefonoEmpresa,
    //   extension,
    //   celularEmpresa,
    //   naturalezaEmpresa,
    //   contactoEmpresa,
    //   departamentoPasantia,
    //   emailEmpresa
    // });

  //   // También puedes reiniciar los campos del formulario
  //   setFaltaPasantia("");
  //   setRealizoServicioSocial("");
  //   setRecinto("");
  //   setMatriculaID("");
  //   setNombreCompleto("");
  //   setSexo("");
  //   setPeriodoAcademico("");
  //   setMateriasOptativas("");
  //   setCarrera("");
  //   setDireccion("");
  //   setSector("");
  //   setMunicipio("");
  //   setProvincia("");
  //   setCelular("");
  //   setTelefono("");
  //   setCedula("");
  //   setNombreEmpresa("");
  //   setRnc("");
  //   setDireccionEmpresa("");
  //   setSectorEmpresa("");
  //   setMunicipioEmpresa("");
  //   setProvinciaEmpresa("");
  //   setTelefonoEmpresa("");
  //   setExtension("");
  //   setCelularEmpresa("");
  //   setNaturalezaEmpresa("");
  //   setContactoEmpresa("");
  //   setDepartamentoPasantia("");
  //   setEmailEmpresa("");
  // };

  const renderPage = () => {
    if (currentPage === 1) {
      return (
        <div className="page">
          <h2 className="text-3xl font-bold mb-4">SOLICITUD DE PASANTIA, UAPA</h2>
          <p className="mb-2">Solo completa el formulario una sola vez, no escribas en mayúsculas sostenidas.</p>
          <p className="mb-4">TRIMESTRAL: OCTUBRE 2023-ENERO 2024.</p>
          <br />
          <h3 className="text-2xl font-bold mb-2">Trimestral:</h3>
          <p className="mb-4">
            Debes haber aprobado todas las asignaturas desde el primero hasta el décimo tercero trimestre, excepto los siguientes casos:
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            {/* <button type="submit" className="btn">Enviar formulario</button> */}
            <button type="button" className="btnv" onClick={previousPage}>Volver al Inicio</button>
          </form>
        </div>
      );
    } else if (currentPage === 2) {
      return (
        <div>
          <h3>PLAZA PROPUESTA PARA REALIZAR LA PASANTIA</h3>
          <br />
          <p>Coloca una propuesta de empresa o institución que cuente con un Departamento o área relacionada a tu carrera donde puedas realizar tu pasantía.</p>
          <br />
          <form onSubmit={handleSubmit}>
            <label>
              Nombre de la empresa/institución:
              <input
                type="text"
                //value={NombreEmpresa}
                id='NombreEmpresa'
                onChange={(e) => handleInputChange(e, 'NombreEmpresa')}
                required
              />
            </label>

            <label>
              Registro Nacional de Contribuyentes (RNC):
              <input
                type="text"
                //value={rnc}
                id='Rnc'
                onChange={(e) => handleInputChange(e, 'Rnc')}
              />
            </label>
              <br />
              <br />
            <label>
              Dirección de la empresa/institución:
              <input
                type="text"
                //value={direccionEmpresa}
                id='DireccionEmpresa'
                onChange={(e) => handleInputChange(e, 'DireccionEmpresa')}
                required
              />
            </label>

            <label>
              Sector donde se encuentra la empresa/institución:
              <input
                type="text"
                //value={sectorEmpresa}
                id='SectorEmpresa'
                onChange={(e) => handleInputChange(e, 'SectorEmpresa')}
                required
              />
            </label>
             <br />
             <br />

            <label>
              Municipio donde se encuentra la empresa/institución:
              <input
                type="text"
                //value={municipioEmpresa}
                id='MunicipioEmpresa'
                onChange={(e) => handleInputChange(e, 'MunicipioEmpresa')}
                required
              />
            </label>

            <label>
              Provincia donde se encuentra la empresa/institución:
              <input
                type="text"
                //value={provinciaEmpresa}
                id='ProvinciaEmpresa'
                onChange={(e) => handleInputChange(e, 'ProvinciaEmpresa')}
                required
              />
            </label>
            <br />
            <br />

            <label>
              Teléfono de la empresa/institución:
              <input
                type="text"
                //value={telefonoEmpresa}
                id='TelefonoEmpresa'
                onChange={(e) => handleInputChange(e, 'TelefonoEmpresa')}
                required
              />
            </label>

            <label>
              Extensión telefónica:
              <input
                type="text"
                //value={extension}
                id='Extension'
                onChange={(e) => handleInputChange(e, 'Extension')}
              />
            </label>
            
              <br />
              <br />
            <label>
              Número de flota o celular:
              <input
                type="text"
                //value={celularEmpresa}
                id='CelularEmpresa'
                onChange={(e) => handleInputChange(e, 'CelularEmpresa')}
                required
              />
            </label>

            <label>
              Naturaleza de la Empresa:
              <input
                type="text"
                //value={naturalezaEmpresa}
                id='NaturalezaEmpresa'
                onChange={(e) => handleInputChange(e, 'NaturalezaEmpresa')}
                required
              />
            </label>
            <br />
            <br />

            <label>
              Nombre completo de la persona a contactar en la empresa o institución:
              <input
                type="text"
                //value={contactoEmpresa}
                id='ContactoEmpresa'
                onChange={(e) => handleInputChange(e, 'ContactoEmpresa')}
                required
              />
            </label>

            <label>
              Departamento en el que realizará la Pasantía:
              <input
                type="text"
                //value={departamentoPasantia}
                id='DepartamentoPasantia'
                onChange={(e) => handleInputChange(e, 'DepartamentoPasantia')}
                required
              />
            </label>
              <br />
              <br />
            <label>
              Correo electrónico de la empresa o institución:
              <input
                type="email"
                //value={emailEmpresa}
                id='EmailEmpresa'
                onChange={(e) => handleInputChange(e, 'EmailEmpresa')}
                required
              />
            </label>

            <button type="submit" className="btnm">Enviar formulario</button>
            <button type="button" className="btnn" onClick={previousPage}>Volver atrás</button>
          </form>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Formulario</h1>
      {renderPage()}
      {/* {currentPage > 1 && (
        <button type="button" className="btn" onClick={previousPage}>
          Volver atrás
        </button>
      )} */}
      {currentPage < 2 && (
        <button type="button" className="btn" onClick={nextPage}>
          Siguiente
        </button>
      )}
      {/* {currentPage === 2 && (
        <button type="button" className="btn" onClick={handleSubmit}>
          Enviar formulario
        </button>
      )} */}
    </div>
  );
};

export default Formulario;
