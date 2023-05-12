import React, { useContext } from 'react';
import AContext from '../context/ContextProvider';

function Login() {
  const { isLoggedIn, login, logout } = useContext(AContext);

  const handleLogin = () => {
    login('usuario', 'contraseña');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='NavPers '>
      {isLoggedIn ? (
        <button className='btn btn-danger text-white fw-bold' onClick={handleLogout}>Cerrar sesión</button>
      ) : (
        <button className='btn btn-warning text-white fw-bold' onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}

export default Login;
