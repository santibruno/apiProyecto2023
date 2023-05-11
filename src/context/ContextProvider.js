import React, { useState } from 'react';

const AContext = React.createContext();

export default AContext;

function ContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const login = (usuario, contraseña) => {
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      setIsLoggedIn(false);
    };
  
    return (
      <AContext.Provider value={{ isLoggedIn, login, logout }}>
        {props.children}
      </AContext.Provider>
    );
  }
  
  export { ContextProvider };