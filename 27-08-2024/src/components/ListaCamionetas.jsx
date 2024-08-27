import React, { Fragment } from "react";
import { Camioneta } from "./Camioneta";

export function ListaCamionetas(){
    return(
        <Fragment>
            <div>
                <h1>Camionetas</h1>
                <ul>
                    <li>
                        <Camioneta/>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}
