import React, { useState, useEffect } from "react";

export function Tabla() {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    setFarmacias(farmacias);
  }, farmacias);

  const response = async () => {
    const response = await fetch(
      "https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7"
    );
    const data = await response.json();
    setFarmacias(data);
  }

  return (
    <>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre farmacia</th>
            <th scope="col">Direccion</th>
            <th scope="col">Horario apertura</th>
            <th scope="col">Horario cierra</th>
          </tr>
        </thead>
        <tbody>
          {farmacias.map((farmacia) => (
            <tr key={farmacia.local_id}>
              <th scope="row">{farmacia.local_id}</th>
              <td>{farmacia.local_nombre}</td>
              <td>{farmacia.local_direccion}</td>
              <td>{farmacia.funcionamiento_hora_apertura}</td>
              <td>{farmacia.funcionamiento_hora_cierre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
