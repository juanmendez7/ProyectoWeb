import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { loginAuth } from '../store/slices/auth/Thunks';
import './estilos/inicioSesion.css';

const InicioSesion = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [redirectRegistro, setRedirectRegistro] = useState(false);
  const { usuario, email, password, onInputChange } = useForm({
    usuario: '',
    email: '',
    password: '',
  });

  const handleIniciarSesionClick = async () => {
    if (!usuario || !email || !password) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    try {
      await dispatch(loginAuth(email, password));
      setMessage('Inicio de sesión exitoso.');
      setLoggedIn(true);
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setMessage('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
      } else {
        setMessage('Error en el inicio de sesión. Por favor, intenta nuevamente.');
      }
    }
  };

  if (loggedIn) {
    return <Navigate to="/ecoaventura" />;
  }

  if (redirectRegistro) {
    return <Navigate to="/registro" />;
  }

  return (
    <div className="container">
      <div className="background-image"> </div>
      <div className="background-image2"> </div>
      <div className="background-image3"> </div>
      <div className="login-box">
        <h1>ECOEDVENTURES</h1>
        <h2>¡EDUCACION DEL CAMBIO CLIMATICO!</h2>
        <br />
        <br />
        {message && <p style={{ color: message.includes('éxito') ? 'green' : 'red' }}>{message}</p>}
        <form>
          <input name="usuario" type="text" placeholder="Ingresa tu nombre de usuario" onChange={(event) => onInputChange(event)} value={usuario} />
          <br />
          <input name="email" type="email" placeholder="Ingresa tu correo electrónico" onChange={(event) => onInputChange(event)} value={email} />
          <br />
          <input name="password" type="password" placeholder="Ingresa tu contraseña" onChange={(event) => onInputChange(event)} value={password} />
          <br />
          <button type="button" onClick={handleIniciarSesionClick}>Iniciar Sesión</button>
          <br />
          <button type="button" onClick={() => setRedirectRegistro(true)}>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default InicioSesion;







