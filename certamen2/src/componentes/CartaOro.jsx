import React from "react";
import oroPng from "../images/oro.png";

export function CartaOro({ numero }) {
  return (
    <>
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={oroPng}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <h3>{numero}</h3>
        </div>
      </div>
    </>
  );
}
