import React, { useState } from "react";

const Container = () => {
  const [contenido, setContenido] = useState("");

  const mostrarExperiencia = () => {
    setContenido("Contenido de Experiencia");
  };

  const mostrarRecursos = () => {
    setContenido("Contenido de Recursos");
  };

  const mostrarIdioma = () => {
    setContenido("Contenido de Idioma");
  };
  return (
    <>
      <div className="col col-2">
        <div className="botonesChanges">
          <button onClick={mostrarExperiencia}>Experiencia</button>
          <button onClick={mostrarRecursos}>Recursos</button>
          <button onClick={mostrarIdioma}>Idioma</button>
        </div>
          <p>{contenido}</p>
      </div>
    </>
  );
};

export default Container;
