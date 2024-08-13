import { Cards } from "./Cards";

export const CardsList = () =>{
    return (
        <div className="cards-list-custome">
        <div className="titulo">
            <h1>PARES Y K - Pedro Ramírez 20628033-6</h1>
        </div>

        <div className="row">
            <div className="col"><Cards></Cards></div>
            <div className="col"></div>
            <div className="col"><Cards></Cards></div>
            <div className="col"></div>
            <div className="col"><Cards></Cards></div>
        </div>
        <div className="row">
            <div className="col"></div>
            <div className="col"><Cards></Cards></div>
            <div className="col"></div>
            <div className="col"><Cards></Cards></div>
            <div className="col"></div>
        </div>

        </div>
    );
}