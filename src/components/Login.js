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
    <div className='NavPers'>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Cerrar sesión</button>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}

export default Login;
