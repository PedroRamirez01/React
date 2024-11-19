import React from "react";
import copaPng from "../images/copa.png";

export function CartaCopa({ numero }) {
  return (
    <>
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={copaPng}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <h3>{numero}</h3>
        </div>
      </div>
    </>
  );
}
