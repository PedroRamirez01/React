import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './Home';
import { About } from './About';
import { Login } from './Login';

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}
