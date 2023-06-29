import React from "react";

const DatosDeContacto = () => {
  return (
    <>
      <div className="colPerso datosPerso col1-1">
        <div className="h5 text-start">Hard Skills</div>
        <hr></hr>
        
        <div className="text-start w-100">
          <p className=" fw-bold">Html/Css</p>
          <div className="progress">
            <div
              className="progress-bar-striped  bg-warning w-75"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <br></br>{" "}
        <div className="text-start w-100">
          <p className=" fw-bold">JavaScript</p>
          <div className="progress">
            <div
              className="progress-bar-striped  bg-warning w-75"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <br></br>{" "}
        <div className="text-start w-100">
          <p className=" fw-bold">React.js</p>
          <div className="progress">
            <div
              className="progress-bar-striped bg-warning w-50"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <br></br>
        <div className="h5 text-start">Soft Skills</div>
        <hr></hr>
        
        <div className="text-start w-100">
          <p className=" fw-bold"> • Comunicacion efectiva y trabajo en equipo</p>
          <p className=" fw-bold">• Resolutivo y agil para la toma de decisiones </p>
          <p className=" fw-bold">• Organizacion y planificacion </p>
          <p className=" fw-bold">• Capacidad de capacitar nuevos compañeros</p>
          <p className=" fw-bold">• Empatia para conectar con personas de otros entornos</p>



        </div>
        <br></br>{" "}

       
      </div>
    </>
  );
};

export default DatosDeContacto;
