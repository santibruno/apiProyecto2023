import React from "react";
import Perfil from "./Perfil";
import DatosDeContacto from "./DatosDeContacto";

const DatosPersonales = () => {
  return (
    <div className="colPerso col1">
      <div className="rowPerso">
        <Perfil/>
      </div>
      <div className="rowPerso">
        <DatosDeContacto/>
        
      </div>
      <div className="rowPerso">
        <div className="colPerso col-Boton">
          <button className="btn btn-warning text-white">Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default DatosPersonales;
