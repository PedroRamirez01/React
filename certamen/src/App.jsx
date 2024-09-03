import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './components/Home'
import { Facebook } from './components/Facebook'
import { Twitter } from './components/Twitter'
import { Instagram } from './components/Instagram'
import { Youtube } from './components/Youtube'
import { Header } from './components/Header'

/* 
IMPORTAR UNA IMAGEN

import {nombre imagen} frrom 'ruta imagen'
*/

export function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/facebook/" element={<Facebook />} />
                <Route path="/twitter/" element={<Twitter />} />
                <Route path="/instagram/" element={<Instagram />} />
                <Route path="/youtube/" element={<Youtube />} />
            </Routes>
        </>
    )
}
