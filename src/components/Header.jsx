import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav
    className="navbar navbar-expand-lg rounded shadow-sm"
    aria-label="Thirteenth navbar example"
  >
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse d-lg-flex"
        id="navbar"
      >
        <Link className="navbar-brand col-lg-3 me-0" to="#">
          Os Jovens Eternos
        </Link>
        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-nos">
              Sobre nós
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" >
              Contato
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" >
              Contato
            </Link>
          </li>
        </ul>
        <div className="d-lg-flex col-lg-3 justify-content-lg-end">
          <button className="btn btn-primary">Faça uma doação</button>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Header;
