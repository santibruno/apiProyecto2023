import React from "react";
import Perfil from "./Perfil";
import DatosDeContacto from "./DatosDeContacto";

const DatosPersonales = () => {
  return (
    <div className="col col-1">
      <div className="row">
        <Perfil/>
      </div>
      <div className="row">
        <DatosDeContacto/>
        
      </div>
      <div className="row">
        <div className="col col-Boton">
          <button className="btn">Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default DatosPersonales;
