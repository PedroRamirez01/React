import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate();

  return (
    <>
        <div className="container">
            <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>

                <li className="nav-item"><Link className="nav-link" onClick={navigate('/')}>Login</Link></li>
            </ul>
            </header>
        </div>
    </>
  )
}
