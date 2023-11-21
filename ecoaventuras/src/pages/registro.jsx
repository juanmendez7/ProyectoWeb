import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./estilos/registro.css"
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { registerAuth } from '../store/slices/auth/Thunks';

const Registro = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [registroCompleto, setRegistroCompleto] = useState(false);
  const [redireccionarInicioSesion, setRedireccionarInicioSesion] = useState(false);
  const { usuario, email, password, onInputChange } = useForm({
    usuario: '',
    email: '',
    password: '',
  });

  const handleAcabarRegistroClick = async () => {
    if (!usuario || !email || !password) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    if (!email.includes('@')) {
      setMessage('El correo electrónico debe contener "@"');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      await dispatch(registerAuth(email, password, usuario));
      setMessage('Registro exitoso. Los datos han sido guardados.');
      setRegistroCompleto(true);
      console.log('Datos guardados:', { usuario, email, password });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('Este correo electrónico ya está en uso. Por favor, utiliza otro.');
      } else {
        setMessage('Error en el registro. Por favor, intenta nuevamente.');
      }
    }
  };

  return (
    <div className='container'>
      <div className="background-image4"> </div>
      <div className="login-box">
        <h1>ECOEDVENTURES</h1>
        <h2>¡EDUCACION DEL CAMBIO CLIMATICO!</h2>
        <br />
        <br />
        {registroCompleto && message && (
          <p style={{ color: message.includes('éxito') ? 'green' : 'red' }}>{message}</p>
        )}
        {!registroCompleto && (
          <form>
            <input name="usuario" type="text" placeholder="Ingresa tu nombre de usuario" onChange={(event) => onInputChange(event)} value={usuario} />
            <br />
            <input name="email" type="text" placeholder="Ingresa correo electronico" onChange={(event) => onInputChange(event)} value={email} />
            <br />
            <input name="password" type="password" placeholder="Ingresa contraseña" onChange={(event) => onInputChange(event)} value={password} />
            <br />
            <button onClick={handleAcabarRegistroClick}>Acabar Registro</button>
            <br />
            <button onClick={() => setRedireccionarInicioSesion(true)}>¿Ya tienes una cuenta?</button>
          </form>
        )}
        {redireccionarInicioSesion && <Navigate to="/inicio" />}
      </div>
    </div>
  );
};

export default Registro;






