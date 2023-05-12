import React, { useState, useEffect } from "react";
import Card from "./Card";

const Container = () => {
  const [contenido, setContenido] = useState(
    <>
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      handleButtonClick("experiencia");
      mostrarExperiencia();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const [activeButton, setActiveButton] = useState("experiencia");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const mostrarExperiencia = () => {
    setContenido(
      <div className="m-2">
        <Card
          key={"1"}
          titulo={"Programador front-end"}
          subtitulo={"Microsoft"}
          fecha_inicio={"10/01/2020"}
          fecha_final={"12/02/2022"}
          labores={
            "Programacion en react.js, Desarrollo de landings pages en javascript, Diseño ux/ui"
          }
        ></Card>
        <Card
          key={"2"}
          titulo={"Programador front-end"}
          subtitulo={"Microsoft"}
          fecha_inicio={"10/01/2020"}
          fecha_final={"12/02/2022"}
          labores={
            "Programacion en react.js, Desarrollo de landings pages en javascript, Diseño ux/ui"
          }
        ></Card>
        <Card
          key={"3"}
          titulo={"Programador front-end"}
          subtitulo={"Microsoft"}
          fecha_inicio={"10/01/2020"}
          fecha_final={"12/02/2022"}
          labores={
            "Programacion en react.js, Desarrollo de landings pages en javascript, Diseño ux/ui"
          }
        ></Card>
      </div>
    );
  };

  const mostrarEducacion = () => {
    setContenido(
      <div className="m-2">
        <Card
          key={"5"}
          titulo={"Secundario"}
          subtitulo={"Esteban Echeverria"}
          fecha_inicio={"01/03/2012"}
          fecha_final={"20/12/2017"}
          labores={"Bachiller orientado en informatica"}
        ></Card>
        <Card
          key={"6"}
          titulo={"Universitario"}
          subtitulo={"UADE"}
          fecha_inicio={"01/03/2018"}
          fecha_final={"Actualidad"}
          labores={"Ingenieria en informatica"}
        ></Card>
      </div>
    );
  };
  const mostrarAcercaDeMi = () => {
    setContenido(
      <div className="my-2 col1-1 px-3 py-2 d-block mx-3">
        <div className="h5 text-start">Fortalezas</div>
        <hr></hr>
        <div className="w-100">
          {" "}
          <p className="fw-italic text-start ps-1 ms-auto">
            Un trabajador que asume la responsabilidad de sus actividades
            siempre contará con la confianza de sus empleadores.
          </p>
          <p className="fw-italic  text-start ps-1 ms-auto">
            Contar con la capacidad de innovar desde la creatividad, siempre
            aportará algo positivo al desarrollo del trabajo. Es indispensable
            para el crecimiento de la empresa, del negocio o proyecto.
          </p>
          <p className="fw-italic  text-start ps-1 ms-auto">
            La adaptabilidad o la resiliencia es una fortaleza primordial hoy en
            día. Quien se muestra flexible ante los cambios, logra un mejor
            desempeño en sus labores.
          </p>
        </div>
        <br></br>
        <div className="h5 text-start">Debilidades</div>
        <hr></hr>
        <div className="w-100">
          {" "}
          <p className="fw-italic text-start ps-1 ms-auto">
            En ocasiones, cuando me entusiasmo demasiado por un proyecto, asumo
            una carga de trabajo que no puedo manejar, por ello, he implementado
            técnicas de organización para que esto no suceda ni entorpezca mi
            desempeño.
          </p>
          <p className="fw-italic  text-start ps-1 ms-auto">
            A veces me acelero y necesito que me hablen sobre los proyectos que
            vienen para idearlos en mi mente con antelación, pero estoy
            trabajando en nivelarlo para convertirme en una persona competitiva,
            en lugar de impaciente.
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="colPerso2 col2">
        <div className="btn-group w-100 mb-2 ">
          <button
            className={
              activeButton === "experiencia"
                ? "btn btn-outline-warning active"
                : "btn btn-outline-warning"
            }
            onClick={() => {
              handleButtonClick("experiencia");
              mostrarExperiencia();
            }}
          >
            Experiencia
          </button>
          <button
            className={
              activeButton === "educacion"
                ? "btn btn-outline-warning active"
                : "btn btn-outline-warning"
            }
            onClick={() => {
              handleButtonClick("educacion");
              mostrarEducacion();
            }}
          >
            Educacion
          </button>
          <button
            className={
              activeButton === "AcercaDeMi"
                ? "btn btn-outline-warning active"
                : "btn btn-outline-warning"
            }
            onClick={() => {
              handleButtonClick("AcercaDeMi");
              mostrarAcercaDeMi();
            }}
          >
            Acerca de Mi
          </button>
        </div>
        <p>{contenido}</p>
      </div>
    </>
  );
};

export default Container;
