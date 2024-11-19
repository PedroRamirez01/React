import React from "react";
import bastoPng from "../images/basto.png";

export function CartaBasto({ numero }) {
  return (
    <>
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={bastoPng}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <h3>{numero}</h3>
        </div>
      </div>
    </>
  );
}
