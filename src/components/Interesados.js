import React, { useContext } from "react";
import AContext from "../context/ContextProvider";
import PersonasCards from "./personasCards";
const Interesados = () => {
  const { isLoggedIn } = useContext(AContext);
  return (
    <>
      <div class="colPerso col3">
        {isLoggedIn ? (
          <div>
            <div class="h5 card-title pt-2 m-2 text-start w-75">
            Personas interesadas en ti:
            </div>
            <hr></hr>
            <PersonasCards key={"p1"} nombreCompleto={"Santiago Bruno"} email={"sbruno@uade.edu.ar"} telefono={"11-31414141"}/>
            <PersonasCards key={"p2"} nombreCompleto={"Manuel Pena"} email={"penaManuel@uade.edu.ar"} telefono={"11-11123331"}/>
            <PersonasCards key={"p3"} nombreCompleto={"Profesor Api"} email={"prueba@uade.edu.ar"} telefono={"11-111111111"}/>

          </div>
        ) : (
          <h3>Debes Iniciar sesion para ver esta vista</h3>
        )}
      </div>
    </>
  );
};

export default Interesados;
