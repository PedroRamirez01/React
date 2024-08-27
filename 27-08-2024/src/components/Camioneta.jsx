import React, { Fragment } from 'react'

export function Camioneta(props){
    return(
        <Fragment>
            <ol>
                <p>Chinas</p>
                <Chinas modelo="SFJK PICK UP D1"/>
                <Chinas modelo="ZX New GRANDLION 4X4 AT"/>
                <p>Tradicionales</p>
                <Chinas modelo="Toyota HILUX"/>
                <Chinas modelo="FORD F150 "/>
            </ol>
        </Fragment>
    );
}

export function Chinas(props){
    return(
        <Fragment>

                <li>
                    <h6>Modelo: {props.modelo}</h6>
                </li>

        </Fragment>
    );
}

export function Tradicionales(props){
    return(
        <Fragment>
            <p>Tradicionales</p>
            <li>
                    <h6>Modelo: {props.modelo}</h6>
                </li>
        </Fragment>
    );
}
