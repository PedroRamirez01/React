import React from "react";
import espadaPng from "../images/espada.jpg";

export function CartaEspada({ numero }) {
  return (
    <>
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={espadaPng}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <h3>{numero}</h3>
        </div>
      </div>
    </>
  );
}
