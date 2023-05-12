import React, { useState } from "react";
import Swal from "sweetalert2";

const AContext = React.createContext();

export default AContext;

function ContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (usuario, contraseña) => {
    Swal.fire({
      title: "Login Form",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
      confirmButtonText: "Iniciar sesion",
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
        if (
          result.value.login == usuario &&
          result.value.password == contraseña
        ) {
          Swal.fire(
            `
        Bienvenido: ${result.value.login}
        `.trim()
          );
          setIsLoggedIn(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error.",
            text: "Usuario o contraseña incorrectos",
          });
          setIsLoggedIn(false);
        }
      }
    });
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
