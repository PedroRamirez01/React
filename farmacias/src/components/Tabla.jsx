import React, { useState, useEffect } from "react";

export function Tabla() {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    // Llamar al backend en Express
    const fetchFarmacias = async () => {
      try {
        const response = await fetch("http://localhost:3000/farmacias/vitacura/"); // Cambia la URL al endpoint de tu backend
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        console.log("Farmacias de Vitacura:", data);
        setFarmacias(data);
      } catch (error) {
        console.error("Error al obtener farmacias:", error);
      }
    };

    fetchFarmacias(); // Ejecutar la función de fetch al montar el componente
  }, []); // Solo se ejecuta una vez, cuando el componente se monta

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre Farmacia</th>
          <th scope="col">Dirección</th>
          <th scope="col">Horario Apertura</th>
          <th scope="col">Horario Cierre</th>
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
  );
}
