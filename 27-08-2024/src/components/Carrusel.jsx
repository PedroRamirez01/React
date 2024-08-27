import React, { Fragment } from 'react'

export function Carrusel() {
  return (
    <Fragment>
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://cdn.mattaki.com/toyota/page-builder/content-pieces/4ab27f5c-c37c-41cb-816d-1549bc70a17d/89e68a59-ac2f-45bf-8286-f4097779e025.webp" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://us.as.com/autos/wp-content/uploads/2024/05/pixelcut-export-2024-05-24T071744.114.jpg" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://fotografias.lasexta.com/clipping/cmsimages01/2020/10/27/5BBE616B-A06F-4ED4-9DEA-440368BC5A2C/98.jpg?crop=1594,897,x5,y0&width=1900&height=1069&optimize=high&format=webply" alt="..."></img>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </Fragment>
  )
}
