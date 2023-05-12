import React from "react";

const Card = ({titulo,subtitulo,fecha_inicio,fecha_final,labores}) => {
  return (
    <>
      <div className="card w-100 d-flex align-items-start ">
        <div class="h5 card-title pt-2 m-2 text-start border-bottom border-warning w-75">{titulo}</div>
        <h6 class="card-subtitle mb-2 w-100 fw-bold text-start ps-2">{subtitulo} </h6>

        <h6 class="card-subtitle mb-2 w-100 text-muted ps-2">{fecha_inicio} - {fecha_final} </h6>
        <p class="card-text text-start px-3 py-1 fst-italic">
          {labores}
        </p>
      </div>
      <br></br>
    </>
  );
};

export default Card;
