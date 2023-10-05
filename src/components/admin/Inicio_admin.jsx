// import React, { useEffect } from 'react';
// import { Chart, DoughnutController, ArcElement } from 'chart.js';

// Chart.register(DoughnutController, ArcElement);

// const InicioAdmin = () => {
//   useEffect(() => {
//     initializeCharts();
//   }, []);

//   const initializeCharts = () => {
//     const estudiantesActivos = 865;
//     const solicitudesPasantia = 10;
//     const numeroMaestros = 78;

//     const estudiantesChart = new Chart('graficoEstudiantes', {
//       type: 'doughnut',
//       data: {
//         labels: ['Estudiantes Activos'],
//         datasets: [{
//           data: [estudiantesActivos],
//           backgroundColor: ['#FF6384'],
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });

//     const solicitudesChart = new Chart('graficoSolicitudesPasantia', {
//       type: 'doughnut',
//       data: {
//         labels: ['Solicitudes de Pasantía'],
//         datasets: [{
//           data: [solicitudesPasantia],
//           backgroundColor: ['#36A2EB'],
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });

//     const maestrosChart = new Chart('graficoNumeroMaestros', {
//       type: 'doughnut',
//       data: {
//         labels: ['Número de Maestros'],
//         datasets: [{
//           data: [numeroMaestros],
//           backgroundColor: ['#FFCE56'],
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });
//   };

//   return (
//     <div>
//       <canvas id="graficoEstudiantes"></canvas>
//       <canvas id="graficoSolicitudesPasantia"></canvas>
//       <canvas id="graficoNumeroMaestros"></canvas>
//     </div>
//   );
// };

// export default InicioAdmin;