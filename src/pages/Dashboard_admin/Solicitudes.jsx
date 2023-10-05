/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Header_admin from "../../components/admin/Header_admin";
import estudiantes from "../../data/Solicitudes";
import avatar from '../../data/avatar2.jpg';
import ModalEstudiante from "../../components/admin/ModalEstudiante";


const Solicitudes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(7);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar estudiantes en base a la búsqueda
  const filteredStudents = estudiantes.filter((estudiante) => {
    const fullName = `${estudiante.nombre} ${estudiante.apellidos}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Calcular índices de estudiantes para la paginación
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Eliminar estudiante
  const deleteStudent = (matricula) => {
    const updatedStudents = estudiantes.filter((estudiante) => estudiante.matricula !== matricula);
    // Aquí puedes realizar la lógica para actualizar los datos en tu backend si corresponde
    console.log('Estudiante eliminado:', matricula);
  };

  // Abrir solicitud
  const openSolicitud = (matricula) => {
    const estudiante = estudiantes.find((estudiante) => estudiante.matricula === matricula);
    setSelectedStudent(estudiante);
    setIsModalOpen(true);
  };

  // Aprobar pasantía
  const handleApprove = () => {
    // Lógica para aprobar la pasantía del estudiante
    console.log('Aprobar pasantía del estudiante:', selectedStudent.matricula);
    // Aquí puedes realizar la lógica para actualizar los datos en tu backend si corresponde
    closeModal();
  };

  // Negar pasantía
  const handleDeny = () => {
    // Lógica para negar la pasantía del estudiante
    console.log('Negar pasantía del estudiante:', selectedStudent.matricula);
    // Aquí puedes realizar la lógica para actualizar los datos en tu backend si corresponde
    closeModal();
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };


  return (
    <>
      <Header_admin />
      <div className="container mx-auto px-4 py-8" style={{ marginLeft: '15%', width: '85%' }}>
        <h1 className="text-3xl font-bold mb-6">Lista de Solicitudes</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar estudiante"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2">Foto</th>
              <th className="border-b border-gray-300 px-4 py-2">Nombre</th>
              <th className="border-b border-gray-300 px-4 py-2">Apellidos</th>
              <th className="border-b border-gray-300 px-4 py-2">Matrícula</th>
              <th className="border-b border-gray-300 px-4 py-2">Fecha</th>
              <th className="border-b border-gray-300 px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((estudiante) => (
              <tr key={estudiante.matricula}>
                <td className="border-b border-gray-300 px-4 py-2">
                  <img src={avatar} alt="Estudiante" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                </td>
                <td className="border-b border-gray-300 px-4 py-2">{estudiante.nombre}</td>
                <td className="border-b border-gray-300 px-4 py-2">{estudiante.apellidos}</td>
                <td className="border-b border-gray-300 px-4 py-2">{estudiante.matricula}</td>
                <td className={`border-b border-gray-300 px-4 py-2 ${estudiante.fecha ? 'bg-green-500' : 'bg-red-500'}`}>
                  {estudiante.fecha ? estudiante.fecha : 'Sin fecha'}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2"
                    onClick={() => openSolicitud(estudiante.matricula)}
                  >
                    Abrir solicitud
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 ml-2"
                    onClick={() => deleteStudent(estudiante.matricula)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
      <ModalEstudiante
        estudiante={selectedStudent}
        closeModal={closeModal}
        handleApprove={handleApprove}
        handleDeny={handleDeny}
      />
      )}
        {filteredStudents.length > studentsPerPage && (
          <div className="mt-6">
            <ul className="flex justify-center">
              {Array.from({ length: Math.ceil(filteredStudents.length / studentsPerPage) }).map((_, index) => (
                <li
                  key={index}
                  className={`px-2 py-1 mx-1 cursor-pointer ${
                    currentPage === index + 1 ? 'bg-gray-400 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Solicitudes;