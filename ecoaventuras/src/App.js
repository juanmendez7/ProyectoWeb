import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import InicioSesion from './pages/inicioSesion';
import Registro from './pages/registro';
import EcoAventura from './pages/paginaPrincipal/ecoAventura';
import Seccionjuegos from './pages/paginaPrincipal/seccionJuegos';
import Seccionlecturas from './pages/paginaPrincipal/seccionLecturas';
import Seccionvideos from './pages/paginaPrincipal/seccionVideos';


const App = () => {
  const [isIniciarSesion, setIsIniciarSesion] = useState(true);

  const handleIniciarSesion = () => {
    console.log('Iniciando sesión...');
    setIsIniciarSesion(false);
  };

  const handleAcabarRegistro = () => {
    console.log('Registro completado.');
    setIsIniciarSesion(false);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/inicio" element={<InicioSesion onIniciarSesion={handleIniciarSesion} onRegistrarse={() => setIsIniciarSesion(false)} />} />
          <Route path="/registro" element={<Registro onAcabarRegistro={handleAcabarRegistro} />} />
          <Route path="/ecoaventura" element={<EcoAventura />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path ="/seccionjuegos" element = {<Seccionjuegos />}/>
          <Route path = "/seccionlecturas" element = {<Seccionlecturas/>}/>
          <Route path ="/seccionvideos" element = {<Seccionvideos/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;


