import React from 'react';
import { Link } from 'react-router-dom';

const BodyContent = () => {
  return (
    <div style={{ paddingLeft: '100px', paddingTop:'50px',fontSize: '2.5rem' }}>
      <h1 >Servicios de pasantía </h1>
      <p style={{ paddingLeft:'20px', paddingTop:'20px', paddingInlineEnd:'10px' ,fontSize: '1rem' }}>Hola! {} </p>
      <p style={{ paddingLeft:'20px',fontSize: '1rem' }}>"Esta es la página de solicitud de pasantía. Desde aquí, puede ir a las siguientes páginas usando (Alt+M) o click en el menú de UAPA en el encabezado y/o en los siguiente enlaces:</p>
      <p style={{ paddingLeft:'20px', paddingTop:'20px', paddingInlineEnd:'10px' ,fontSize: '1rem' }}>Servicios</p>
      <ul style={{ paddingLeft:'20px', paddingTop:'10px', fontSize: '1rem' }}>
        <li style={{ listStyleType: 'disc' }}><Link to="/">Inicio</Link></li>
        <li style={{ listStyleType: 'disc' }}><Link to="/estudiante/formulario">Solicitar pasantía</Link></li>
        <li style={{ listStyleType: 'disc' }}><Link to="/contacto">Contacto</Link></li>
      </ul>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/"> {/* Enlace a la página de inicio */}
            <img src="/images/Logo-uapa.png" alt="Logo de la empresa" width="150" height="125" style={{ paddingLeft: '10px' }}/>
          </Link>
        </div>
      </header>
      <nav>
        <BodyContent /> {}
      </nav>
    </div>
  );
};

export default HomePage;
