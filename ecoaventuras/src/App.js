import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import InicioSesion from './pages/inicioSesion';
import Registro from './pages/registro';
import EcoAventura from './pages/paginaPrincipal/ecoAventura';
import Seccionjuegos from './pages/paginaPrincipal/seccionJuegos';
import Seccionlecturas from './pages/paginaPrincipal/seccionLecturas';
import Seccionvideos from './pages/paginaPrincipal/seccionVideos';
import { Provider } from 'react-redux'; // Importa Provider desde react-redux
import { store } from './store/store'; // Reemplaza esto con la ruta correcta hacia tu store

const App = () => {
  return (
    <Provider store={store}> {/* Envuelve tu aplicación con Provider y pasa tu store */}
      <Router>
        <div>
          <Routes>
            <Route path="/inicio" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/ecoaventura" element={<EcoAventura />} />
            <Route path="/seccionjuegos" element={<Seccionjuegos />} />
            <Route path="/seccionlecturas" element={<Seccionlecturas />} />
            <Route path="/seccionvideos" element={<Seccionvideos />} />
            <Route path="/" element={<Navigate to="/inicio" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;





