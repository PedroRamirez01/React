import React, { Fragment } from 'react'

export function Auto(props){
    return(
        <Fragment>  
            <ol><Chevrolet modelo="Silverado" version="Premier"/></ol>
            <ol><Suzuki modelo="a" version="a"/></ol>
            <ol><Volvo modelo="b" version="b"/></ol>
        </Fragment>
    );
}

export function Chevrolet(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Auto: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}

export function Suzuki(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Auto: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}

export function Volvo(props){
    return(
        <Fragment>
            <li>
                <ul>
                    <h6>Modelo de Auto: {props.modelo}</h6>
                    <h6>Version: {props.version}</h6>
                </ul>
            </li>
        </Fragment>
    );
}
