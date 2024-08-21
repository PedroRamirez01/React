import React, { Fragment } from 'react'

export function Moto(props){
    return(
        <Fragment>  
            <ol><BMW modelo="moto a" version="version moto a"/></ol>
            <ol><KTM modelo="moto b" version="version moto b"/></ol>
            <ol><Honda modelo="moto c" version="version moto c"/></ol>
        </Fragment>
    );
}

export function BMW(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Moto: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}

export function KTM(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Moto: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}

export function Honda(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Moto: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}
