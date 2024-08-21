import React from "react";

export function Form() {
  return (
    <div className="mt-5">
      <div className="row g-3 align-items-center mb-5">
        <div className="col-6">
          <label for="nombre" className="col-form-label">
            Nombre Pokemón
          </label>
        </div>
        <div className="col">
          <input type="text" id="nombre" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <button className="btn btn-outline-secondary">Agregar</button>
        </div>
      </div>
    </div>
  );
}
