/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Header_admin from "../../components/admin/Header_admin";
import estudiantes from "../../data/dummy";

const Estudiantes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(8);

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

  const modifyStudent = (matricula) => {
    const updatedStudents = estudiantes.filter((estudiante) => estudiante.matricula !== matricula);
    // Aquí puedes realizar la lógica para actualizar los datos en tu backend si corresponde
    console.log('Estudiante modificado:', matricula);
  };


  return (
    <>
      <Header_admin />
      <div className="container mx-auto px-4 py-8" style={{ marginLeft: '15%', width: '85%' }}>
        <h1 className="text-3xl font-bold mb-6">Lista de Estudiantes</h1>
        <div className="mb-6" >
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
              <th className="border-b border-gray-300 px-4 py-2">Nombre</th>
              <th className="border-b border-gray-300 px-4 py-2">Apellidos</th>
              <th className="border-b border-gray-300 px-4 py-2">Matrícula</th>
              <th className="border-b border-gray-300 px-4 py-2">Estatus</th>
              <th className="border-b border-gray-300 px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((estudiante) => (
              <tr key={estudiante.matricula}>
                <td className="border-b border-gray-300 px-4 py-2">{estudiante.nombre}</td>
                <td className="border-b border-gray-300 px-4 py-2">{estudiante.apellidos}</td>
                <td className="border-b border-gray-300 px-4 py-2">{estudiante.matricula}</td>
                <td className={`border-b border-gray-300 px-4 py-2 ${estudiante.estatus === 'Pausa' ? 'bg-red-500' : 'bg-green-500'}`}>
                  {estudiante.estatus}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '45%' }}>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2"
                    onClick={() => deleteStudent(estudiante.matricula)}
                    style={{ width: '45%' }}
                  >
                    Eliminar
                  </button>
                  {/* modificar los datos */}
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                    onClick={() => modifyStudent(estudiante.matricula)}
                    style={{ width: '45%' }}
                  >
                    Modificar
                  </button>
                </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length > studentsPerPage && (
          <div className="mt-6">
            <ul className="flex justify-center">
              {Array.from({ length: Math.ceil(filteredStudents.length / studentsPerPage) }, (_, index) => (
                <li key={index}>
                  <button
                    className={`${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    } rounded px-4 py-2`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Estudiantes;