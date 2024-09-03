import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src='../images/favicon-32x32.png' alt="Logo" />
        <span className="fs-4">Pedro Ramírez Aparicio</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href='/' className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a href='/facebook/' className="nav-link" style={{color:'hsl(203, 89%, 53%)'}}>Facebook</a>
        </li>
        <li className="nav-item">
          <a href='/twitter/' className="nav-link" style={{color: 'hsl(195, 100%, 50%)'}}>Twitter</a>
        </li>
        <li className="nav-item">
          <a href='/instagram/' className="nav-link" style={{color: 'hsl(37, 97%, 70%)'}}>Instagram</a>
        </li>
        <li className="nav-item">
          <a href='/youtube/' className="nav-link" style={{color: 'hsl(348, 97%, 39%)'}}>Youtube</a>
        </li>
      </ul>
    </header>
  );
}
