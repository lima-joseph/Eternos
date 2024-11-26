import React from 'react';
import { Link } from 'react-router-dom';  // Importando o Link do react-router-dom
import { Icon } from '../components/Icons';
import './css/Footer.css'

function Footer() {
  return (
    <div className='border-top bg-light pb-0 px-5 mt-5'>
        <footer className="py-5 pb-0 mb-0">
        <div className="row">
            <div className="col-6 col-md-2 mb-3">
                <h5>Principal</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                    <li className="nav-item mb-2"><Link to="/sobre-nos" className="nav-link p-0 text-body-secondary">Sobre nós</Link></li>
                    <li className="nav-item mb-2"><Link to="/equipe-eterna" className="nav-link p-0 text-body-secondary">Equipe Eterna</Link></li>
                </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
                <h5>Eternos</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="/encontros" className="nav-link p-0 text-body-secondary">Encontros</Link></li>
                    <li className="nav-item mb-2"><Link to="/eventos" className="nav-link p-0 text-body-secondary">Próximos eventos</Link></li>
                    <li className="nav-item mb-2"><Link to="/localizacao" className="nav-link p-0 text-body-secondary">Onde estamos?</Link></li>
                </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
            </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Os Jovens Eternos. Todos os Direitos Reservados.</p>
            <p className='fw-medium'>Pascom São Francisco De Assis - Santa Bárbara d´Oeste / SP - Diocese de Piracicaba</p>
            <ul className="list-unstyled d-flex">
                <li className="ms-3"><Link to="/Instagram" className="link-body-emphasis"><Icon iconName="Instagram"/></Link></li>
            </ul>
        </div>
        </footer>
    </div>
  );
}

export default Footer;
