import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Assume firebase is configured in this file
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export function Adornos() {
  const [adornos, setAdornos] = useState([]);

  useEffect(() => {
    const fetchAdornos = async () => {
      const q = query(collection(db, 'adornos'), orderBy('cantidad'));
      const querySnapshot = await getDocs(q);
      const adornosList = querySnapshot.docs.map(doc => doc.data());
      setAdornos(adornosList);
    };

    fetchAdornos();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del Adorno</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {adornos.map((adorno, index) => (
          <tr key={index}>
            <td>{adorno.nombre}</td>
            <td>{adorno.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
