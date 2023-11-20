import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./estilos/registro.css"



const Registro = ({ onAcabarRegistro }) => {
  const [registroCompleto, setRegistroCompleto] = useState(false);
  const [registroPuesto, setRegistroPuesto] = useState(false);

  const handleAcabarRegistroClick = () => {
    // Simulación de lógica de registro exitoso
    setRegistroCompleto(true);
    onAcabarRegistro(); // Llamar a la función de App.js
  };

  const handleRegistroPuestoClick = () => {
    setRegistroPuesto(true);
  }

  if(registroPuesto) {
    return <Navigate to = "/inicio"/>
  }

  if (registroCompleto) {
    return <Navigate to="/ecoaventura" />;
  }

  return (
    <div className='container'>
      <div className="background-image4"> </div>
      <div className="login-box">
      <h1>ECOEDVENTURES</h1>
      <h2>¡EDUCACION DEL CAMBIO CLIMATICO!</h2>
      <br/>
      <br/>
      <form>
        {/* Campos de usuario, correo electrónico y contraseña */}
        <input type="text" placeholder="Ingresa correo electronico" />
        <br/>
        <input type="text" placeholder="Ingresa tu nombre de usuario" />
        <br/>
        <input type="text" placeholder="Ingresa contraseña" />
        <br/>
        <input type="text" placeholder="Repita su contraseña" />
        <br/>
        <button onClick={handleAcabarRegistroClick}>Acabar Registro</button>
        <br/>
        <button onClick={handleRegistroPuestoClick}>¿Ya tienes una cuenta?</button>
      </form>
      </div>
    </div>
  );
};

export default Registro;



