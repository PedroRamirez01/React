import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Assume firebase is configured in this file
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export function Regalos() {
  const [regalos, setRegalos] = useState([]);

  useEffect(() => {
    const fetchRegalos = async () => {
      const q = query(collection(db, 'regalos'), orderBy('prioridad'));
      const querySnapshot = await getDocs(q);
      const regalosList = querySnapshot.docs.map(doc => doc.data());
      setRegalos(regalosList);
    };

    fetchRegalos();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del Regalo</th>
          <th>Nombre del Familiar</th>
          <th>Prioridad</th>
        </tr>
      </thead>
      <tbody>
        {regalos.map((regalo, index) => (
          <tr key={index}>
            <td>{regalo.nombre}</td>
            <td>{regalo.familiar}</td>
            <td>{regalo.prioridad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
