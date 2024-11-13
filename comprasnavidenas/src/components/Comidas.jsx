import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Assume firebase is configured in this file
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export function Comidas() {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const fetchComidas = async () => {
      const q = query(collection(db, 'comidas'), orderBy('congelado', 'desc'));
      const querySnapshot = await getDocs(q);
      const comidasList = querySnapshot.docs.map(doc => doc.data());
      setComidas(comidasList);
    };

    fetchComidas();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del Alimento</th>
          <th>Congelado</th>
        </tr>
      </thead>
      <tbody>
        {comidas.map((comida, index) => (
          <tr key={index}>
            <td>{comida.nombre}</td>
            <td>{comida.congelado ? 'Sí' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
