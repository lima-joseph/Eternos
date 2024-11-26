import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Eventos from './pages/Eventos';
import Contato from './pages/Contato';
import NossaParoquia from './pages/NossaParoquia'
import EquipeEterna from './pages/EquipeEterna'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <Router>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<Sobre />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/nossa-paroquia" element={<NossaParoquia />} />
        <Route path="/equipe-eterna" element={<EquipeEterna />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
