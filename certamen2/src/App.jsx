import React, { useEffect, useState } from "react";
import { CartaCopa } from "./componentes/CartaCopa";
import { CartaBasto } from "./componentes/CartaBasto";
import { CartaEspada } from "./componentes/CartaEspada";
import { CartaOro } from "./componentes/CartaOro";

export function App() {
  const [cartas, setCartas] = useState([]);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    console.log(cartas);
    console.log(suma);
  }, [cartas]);

  const agregarCarta = () => {
    if (cartas.length < 4/*  && suma < 15 */) {
      const numero = document.getElementById("inputNumero").value;
      const selectedRadio = document.querySelector(
        'input[name="flexRadioDefault"]:checked'
      ).id;
      setSuma(suma + parseInt(numero));

      let nuevaCarta;
      switch (selectedRadio) {
        case "radioOro":
          nuevaCarta = <CartaOro numero={numero} />;
          break;
        case "radioCopas":
          nuevaCarta = <CartaCopa numero={numero} />;
          break;
        case "radioBastos":
          nuevaCarta = <CartaBasto numero={numero} />;
          break;
        case "radioEspadas":
          nuevaCarta = <CartaEspada numero={numero} />;
          break;
        default:
          return;
      }
      setCartas([...cartas, nuevaCarta]);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>La Escoba</h1>
      </div>

      <div className="row" style={{ marginTop: "25px" }}>
        <div className="col d-flex justify-content-start">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputNumero" className="col-form-label">
                Número
              </label>
            </div>
            <div className="col-auto">
              <input
                type="number"
                id="inputNumero"
                className="form-control"
                aria-describedby="numeroHelpInline"
                max="12"
                min="1"
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value < 1 || value > 12) {
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <div className="form-check" style={{ marginRight: "10px" }}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioOro"
            />
            <label className="form-check-label" htmlFor="radioOro">
              Oros
            </label>
          </div>
          <div className="form-check" style={{ marginRight: "10px" }}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioCopas"
            />
            <label className="form-check-label" htmlFor="radioCopas">
              Copas
            </label>
          </div>
          <div className="form-check" style={{ marginRight: "10px" }}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioBastos"
            />
            <label className="form-check-label" htmlFor="radioBastos">
              Bastos
            </label>
          </div>
          <div className="form-check" style={{ marginRight: "10px" }}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioEspadas"
            />
            <label className="form-check-label" htmlFor="radioEspadas">
              Espadas
            </label>
          </div>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn btn-primary" onClick={() => agregarCarta()}>
            Agregar
          </button>
        </div>
      </div>

      {/* Aqui se imprimen las cartas */}
      <div
        className="row align-items-center justify-content-center"
        style={{ marginTop: "25px", height: "50vh" }}
      >
        {cartas}
      </div>

      {/* mostrar mensajes correspondientes */}
      <div
        className="d-flex justify-content-center b-0"
        style={{ marginTop: "25px", border: "1px solid black" }}
      >
        <h3>
          {suma < 15
            ? `Faltan ${15 - suma} para la escoba`
            : suma === 15
            ? `Escoba!`
            : `Te pasaste, perdiste!`}
        </h3>
      </div>
    </>
  );
}
