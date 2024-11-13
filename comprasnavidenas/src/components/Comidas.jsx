import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Assume firebase is configured in this file
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";

export function Comidas() {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const fetchComidas = async () => {
      const q = query(collection(db, "comidas"), orderBy("congelado", "desc"));
      const querySnapshot = await getDocs(q);
      const comidasList = querySnapshot.docs.map((doc) => doc.data());
      setComidas(comidasList);
    };

    fetchComidas();
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Tabla comidas", 10, 10);
    doc.autoTable({
      head: [["Nombre del Alimento", "Congelado"]],
      body: comidas.map((comida) => [comida.nombre, comida.congelado ? "Sí" : "No"
      ]),
    });
    doc.save("Comidas.pdf");
  };

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(comidas);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Comidas");
    XLSX.writeFile(workbook, "comidas.xlsx");
  };

  const exportPNG = () => {
    const input = document.getElementById("table-comidas");
    html2canvas(input).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "Comidas.png";
      link.click();
    });
  };

  return (
    <>
      <h2>Comidas</h2>
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
      <table id="table-comidas" className="table">
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
              <td>{comida.congelado ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
