import React from "react";

const Perfil = () => {
  return (
    <>
      <div className="colPerso datosPerso col1-1 mt-3">
        <div className="">
          <img
            className="foto border rounded-5"
            src="https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/foto-perfil-psicologo-180x180.jpg?resize=180%2C180"
          ></img>
        </div>
        <br></br>
        <div className="h5 text-start">Datos Personales</div>
        <hr></hr>

        <div className="d-flex w-100">
          <p className="fw-bold">Nombre Completo:</p>
          <p className="fw-italic ps-1 ms-auto">Nestor Ortigoza</p>
        </div>
        <div className="text-start d-flex">
          <p className="fw-bold">Email:</p>
          <p className="fw-italic ps-1 ms-auto">NestorOrtigoza12@gmail.com</p>
        </div>
        <div className="text-start d-flex">
          <p className="fw-bold">Telefono:</p>
          <p className="fw-italic ps-1 ms-auto">011-1122-1122</p>
        </div>
        <div className="text-start d-flex">
          <p className="fw-bold">Dni:</p>
          <p className="fw-italic ps-1 ms-auto">35353214</p>
        </div>
        <div className="text-start d-flex">
          <p className="fw-bold">Localidad:</p>
          <p className="fw-italic ps-1 ms-auto">Merlo</p>
        </div>
        <div className="text-start d-flex pt-1">
          <p className="fw-bold">LinkedIn:</p>

          <a
            className="fw-italic ps-1 ms-auto"
            href="https://www.linkedin.com/in/mark-zuckerberg-618bba58/"
          >
            <img
              className="iconoLink"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Perfil;
