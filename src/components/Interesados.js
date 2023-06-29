import React, { useContext, useEffect, useState } from "react";
import AContext from "../context/ContextProvider";
import PersonasCards from "./personasCards";
const Interesados = () => {
  const { isLoggedIn, token } = useContext(AContext);

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:8080/api/mail/getMails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          jwt: token,
        },
        cache: "default",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPersonas(data);
        });
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div class="colPerso col3">
          <div>
            <div class="h5 card-title pt-2 m-2 text-start w-75">
              Personas interesadas en ti:
            </div>
            <hr></hr>
            {personas.map((persona) => (
            <PersonasCards
              key={persona._id}
              nombreCompleto={persona.name}
              email={persona.email}
              telefono={persona.nrotelefono}
            />
          ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Interesados;
