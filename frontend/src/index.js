import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';  // Asegúrate de importar desde 'react-dom/client'
import './index.css';  // Si tienes estilos globales
import App from './App'; // Componente principal de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css';  // Estilos de Bootstrap
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'; // Estilos para DataTables
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'; // Estilos para DataTables Responsive

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usa createRoot()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


