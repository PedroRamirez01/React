import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import { db } from "../firebase"; // Assume firebase is configured in this file
import { collection, query, orderBy, getDocs } from "firebase/firestore";

export function Regalos() {
  const [regalos, setRegalos] = useState([]);

  useEffect(() => {
    const fetchRegalos = async () => {
      const q = query(collection(db, "regalos"), orderBy("prioridad"));
      const querySnapshot = await getDocs(q);
      const regalosList = querySnapshot.docs.map((doc) => doc.data());
      setRegalos(regalosList);
    };

    fetchRegalos();
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Regalos", 10, 10);
    doc.autoTable({
      head: [["Nombre del Regalo", "Nombre del Familiar", "Prioridad"]],
      body: regalos.map((regalo) => [
        regalo.nombre,
        regalo.familiar,
        regalo.prioridad,
      ]),
    });
    doc.save("Regalos.pdf");
  };

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(regalos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Regalos");
    XLSX.writeFile(workbook, "Regalos.xlsx");
  };

  const exportPNG = () => {
    const input = document.getElementById("table-regalos");
    html2canvas(input).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "Regalos.png";
      link.click();
    });
  };

  return (
    <>
      <h2>Regalos</h2>
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
      <table id="table-regalos" className="table">
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
    </>
  );
}
