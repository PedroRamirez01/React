import React from "react";
import { Regalos } from "./components/Regalos";
import { Comidas } from "./components/Comidas";
import { Adornos } from "./components/Adornos";

export function App() {
  return (
    <>
      <div className="row">
        <div className="col">
          <Regalos />
        </div>
        <div className="col">
          <Comidas />
        </div>
        <div className="col">
          <Adornos />
        </div>
      </div>
    </>
  );
}
