import React from "react";
import Perfil from "./Perfil";
import DatosDeContacto from "./DatosDeContacto";
import Swal from "sweetalert2";

const DatosPersonales = () => {
  return (
    <div className="colPerso col1">
      <div className="rowPerso">
        <Perfil />
      </div>
      <div className="rowPerso">
        <DatosDeContacto />
      </div>
      <div className="rowPerso">
        <div className="colPerso col-Boton">
          <button
            onClick={() => {
              Swal.fire({
                title: "Formulario de Contacto",
                html: `<input type="text" id="login" class="swal2-input mx-0 w-75" placeholder="Nombre Completo">
                <input required type="text" id="password" class="swal2-input mx-0 w-75" placeholder="Telefono">
              `,
                input: "text",
                inputPlaceholder: "Mail",
                customClass: { input: "swal2-input mx-1 w-75 mx-auto" },
                inputValidator: (email) => {
                  if (!email.includes("@")) {
                    return "Por favor escriba un mail valido";
                  } else {
                    return undefined;
                  }
                },

                confirmButtonColor: "#ffca2c",
                confirmButtonText: "Enviar",
              });
            }}
            className="btn btn-warning text-white"
          >
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatosPersonales;
