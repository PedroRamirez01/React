import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Assume firebase is configured in this file
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";

export function Adornos() {
  const [adornos, setAdornos] = useState([]);

  useEffect(() => {
    const fetchAdornos = async () => {
      const q = query(collection(db, "adornos"), orderBy("cantidad"));
      const querySnapshot = await getDocs(q);
      const adornosList = querySnapshot.docs.map((doc) => doc.data());
      setAdornos(adornosList);
    };

    fetchAdornos();
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Tabla Adornos", 10, 10);
    doc.autoTable({
      head: [["Nombre del Adorno", "Cantidad"]],
      body: adornos.map((adorno) => [adorno.nombre, adorno.cantidad]),
    });
    doc.save("Adornos.pdf");
  };

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(adornos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Adornos");
    XLSX.writeFile(workbook, "Adornos.xlsx");
  };

  const exportPNG = () => {
    const input = document.getElementById("table-adornos");
    html2canvas(input).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "Adornos.png";
      link.click();
    });
  };

  return (
    <>
      <h2>Adornos</h2>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={exportPDF}>
          Descargar PDF
        </button>
        <button className="btn btn-success" onClick={exportXLSX}>
          Descargar Excel
        </button>
        <button className="btn btn-warning" onClick={exportPNG}>
          Descargar PNG
        </button>
      </div>
      <table id="table-adornos" className="table">
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
    </>
  );
}
