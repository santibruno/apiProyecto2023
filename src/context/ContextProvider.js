import React, { useState } from "react";
import Swal from "sweetalert2";

const AContext = React.createContext();

export default AContext;

function ContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken] = useState("");
  const [nuevoInteresado,setNuevoInteresado] = useState(false);
  const login = () => {
    Swal.fire({
      title: "Iniciar sesion",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
      confirmButtonText: "Ingresar",
      focusConfirm: false,
      showCloseButton: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        } else {
          return { login: login, password: password };
        }
      },
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        const email = result.value.login;
        const password = result.value.password;
        const jsonBody = `{"email": "${email}","password":"${password}"}`;
        fetch("http://localhost:8080/api/user/login", {
          method: "POST",
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body: jsonBody,
          cache: "default",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.estado == true) {
              setToken(data.token)
              {
                Swal.fire(
                  `
          Bienvenido: ${result.value.login}
          `.trim()
                );
                setIsLoggedIn(true);
                document.getElementById(
                  "containerPerso"
                ).style.gridTemplateColumns = "repeat(3, 1fr)";
              }
            } else {
              Swal.fire({
                icon: "error",
                title: "Error.",
                text: "Usuario o contraseña incorrectos",
              });
              setIsLoggedIn(false);
              document.getElementById(
                "containerPerso"
              ).style.gridTemplateColumns = "repeat(2, 1fr)";
            }
          });
      }
    });
  };

  const nuevoInteresadoChange = () => {
    if (nuevoInteresado) {
      setNuevoInteresado(false);
    }else {
      setNuevoInteresado(true);
    }
  
  };

  const logout = () => {
    setIsLoggedIn(false);
    document.getElementById("containerPerso").style.gridTemplateColumns =
      "repeat(2, 1fr)";
  };

  return (
    <AContext.Provider value={{ isLoggedIn, login, logout,token,nuevoInteresado,nuevoInteresadoChange}}>
      {props.children}
    </AContext.Provider>
  );
}

export { ContextProvider };
