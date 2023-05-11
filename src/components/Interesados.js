import React, { useContext } from "react";
import AContext from "../context/ContextProvider";

const Interesados = () => {
  const { isLoggedIn } = useContext(AContext);
  return (
    <>
      <div class="col col-3">
        {isLoggedIn ? (
          <h2>Estos son los interesados</h2>
        ) : (
          <h3>Debes Iniciar sesion para ver esta vista</h3>
        )}
      </div>
    </>
  );
};

export default Interesados;
