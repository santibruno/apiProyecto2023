import React from "react";

const PersonasCards = ({ nombreCompleto, email, telefono }) => {
  return (
    <>
      <div className="card w-100 d-flex align-items-start ">
        <div class="h5 card-title pt-2 m-2 text-start border-bottom border-warning w-75">
          {nombreCompleto}
        </div>
        <h6 class="card-subtitle mb-2 w-100  text-start ps-2">{email} </h6>
        <h6 class="card-subtitle mb-2 w-100  text-start ps-2">{telefono} </h6>
      </div>
      <br></br>
    </>
  );
};

export default PersonasCards;
