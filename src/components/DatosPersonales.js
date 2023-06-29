import React, { useContext } from "react";
import Perfil from "./Perfil";
import DatosDeContacto from "./DatosDeContacto";
import Swal from "sweetalert2";
import AContext from "../context/ContextProvider";


const DatosPersonales = () => {
  const {nuevoInteresadoChange} = useContext(AContext);
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
                html: `<input type="text" id="nombreInput" class="swal2-input mx-0 w-75" placeholder="Nombre Completo">
                <input required type="text" id="telInput" class="swal2-input mx-0 w-75" placeholder="Telefono">
              `,
                input: "text",
                inputPlaceholder: "Mail",
                inputAttributes: {
                  id: "mailInput",
                },
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
              }).then((resp) => {
                if (resp.isConfirmed) {
                  const Nombre = document.getElementById("nombreInput").value;
                  const tel = document.getElementById("telInput").value;
                  const mail = document.getElementById("mailInput").value;
                  const jsonBody = `{"name": "${Nombre}","email": "${mail}","telefono":"${tel}"}`;
                  fetch("http://localhost:8080/api/mail/create", {
                    method: "POST",
                    headers: {
                      Accept: "application.json",
                      "Content-Type": "application/json",
                    },
                    body: jsonBody,
                    cache: "default",
                  }).then((resp) => {
                    if (resp.status == 400) {
                      Swal.fire({
                        icon: "error",
                        title: "Error.",
                        text: "Porfavor complete los datos solicitados correctamente",
                      });
                    } else if (resp.ok) {
                      Swal.fire({
                        icon: "success",
                        title: "Confirmado.",
                        text: "Gracias por contactarse! ",
                      });
                      nuevoInteresadoChange();
                    } else {
                      Swal.fire({
                        icon: "Error",
                        title: "Error.",
                        text: "Error ",
                      });
                    }
                  });
                }
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
