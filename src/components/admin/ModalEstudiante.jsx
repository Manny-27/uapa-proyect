import React from 'react';
import avatar from '../../data/avatar2.jpg';

const ModalEstudiante = ({ estudiante, closeModal, handleApprove, handleDeny }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-98 ">
        <div className="flex items-start mb-1">
          <img src={avatar} alt="Imagen del estudiante" className="rounded-full h-32 w-32 object-cover" />
          <div className="ml-6">
            <h2 className="text-2xl font-bold mb-2">{estudiante.nombre} {estudiante.apellidos}</h2>
            <p className="mb-1">Matrícula: {estudiante.matricula}</p>
            <p className="mb-1">Carrera: {estudiante.carrera}</p>
            <p className="mb-1">Estatus: {estudiante.estatus}</p>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-1" />
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Obligatorio</h3>
        <hr className="border-t border-gray-300 my-1" />
          <div className="pl-6 ">
            <p className="mb-1"><span className="font-bold ">Realizó Servicio Social:</span> {estudiante.realizoServicioSocial ? 'Sí' : 'No'}</p>
            <p className="mb-1"><span className="font-bold">Materias Optativas:</span> {estudiante.materiasOptativas}</p>
            <p className="mb-1"><span className="font-bold">Décimo Trimestre:</span> {estudiante.decimoTrimestre ? 'Sí' : 'No'}</p>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-1" />
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Datos de la Empresa</h3>
        <hr className="border-t border-gray-300 my-1" />
          <div className="pl-6">
            <p className="mb-1"><span className="font-bold">Nombre de la Empresa:</span> {estudiante.nombreEmpresa}</p>
            <p className="mb-1"><span className="font-bold">RNC:</span> {estudiante.rnc}</p>
            <p className="mb-1"><span className="font-bold">Dirección de la Empresa:</span> {estudiante.direccionEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Sector de la Empresa:</span> {estudiante.sectorEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Municipio de la Empresa:</span> {estudiante.municipioEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Provincia de la Empresa:</span> {estudiante.provinciaEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Teléfono de la Empresa:</span> {estudiante.telefonoEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Extensión:</span> {estudiante.extension}</p>
            <p className="mb-1"><span className="font-bold">Celular de la Empresa:</span> {estudiante.celularEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Naturaleza de la Empresa:</span> {estudiante.naturalezaEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Contacto de la Empresa:</span> {estudiante.contactoEmpresa}</p>
            <p className="mb-1"><span className="font-bold">Departamento de Pasantía:</span> {estudiante.departamentoPasantia}</p>
            <p className="mb-1"><span className="font-bold">Email de la Empresa:</span> {estudiante.emailEmpresa}</p>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button onClick={handleDeny} className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mr-2 ">
            Negar pasantía
          </button>
          <button onClick={handleApprove} className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 ml-2 ">
            Aprobar pasantía
          </button>
        </div>
        <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded px-4 py-2 mt-6 w-full">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalEstudiante;