import React from "react";
import { Tabla } from "./components/Tabla";

export function App() {

    return (
        <>
            <h1 className="text-center">Farmacias de Turno Vitacura</h1>
            <div className="container lg-3 pt-5">
                <Tabla/>
            </div>                   
        </>
    )
}