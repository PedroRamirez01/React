import React, { Fragment } from 'react'

export function Camion(props){
    return(
        <Fragment>  
            <ol><Volvo modelo="camion a" version="version camion a"/></ol>
            <ol><Ibekio modelo="camion b" version="version camion b"/></ol>
            <ol><Scania modelo="camion c" version="version camion c"/></ol>
        </Fragment>
    );
}

export function Volvo(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Camion: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}

export function Ibekio(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Camion: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}

export function Scania(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Camion: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}
