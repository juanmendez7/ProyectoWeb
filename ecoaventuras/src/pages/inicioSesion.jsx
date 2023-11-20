import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./estilos/inicioSesion.css";

const InicioSesion = ({ onIniciarSesion, onRegistrarse }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerIn, setRegisterIn] = useState(false);

  const handleIniciarSesionClick = () => {
    // Simulación de lógica de autenticación exitosa
    setLoggedIn(true);
    onIniciarSesion(); // Llamar a la función de App.js
  };

  const handleRegistrarseClick = () => {
    setRegisterIn(true);
    onRegistrarse();
  }

  if (loggedIn) {
    return <Navigate to="/ecoaventura" />;
  } else if(registerIn){
    return <Navigate to = "/registro"/>
  }

  return (
    
    <div className="container">
      <div className="background-image"> </div>
      <div className="background-image2"> </div>
      <div className="background-image3"> </div>
    <div className="login-box">
      <h1>ECOEDVENTURES</h1>
      <h2>¡EDUCACION DEL CAMBIO CLIMATICO!</h2>
      <br/>
      <br/>
      <form>
        {/* Campos de usuario y contraseña */}
        <input type="text" placeholder="Ingresa tu nombre de usuario" />
        <br/>
        <input type="password" placeholder="Ingrese su contraseña" />
        <br/>
        <br/>
        <button type="button" onClick={handleIniciarSesionClick}>Iniciar Sesión</button>
        <br/>
        <button type="button" onClick={handleRegistrarseClick}>Registrarse</button>
      </form>
    </div>
  </div>
  
  );
};

export default InicioSesion;



