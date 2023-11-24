import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import { FaHome, FaEnvelope, FaSeedling, FaPagelines } from "react-icons/fa";
import Home from './components/Pages/Home';
import Sobre from './components/Pages/Sobre';
import Servicos from './components/Pages/Servicos';
import Contato from './components/Pages/Contato';
import Rodape from './components/Pages/Rodape';

function App() {
  return (
    <div>



      <BrowserRouter>
        {/*Aqui o Menu:*/}
        <nav className="menu">
          <ul>
            <li><Link to="/"><FaHome />Home</Link></li>
            <li><Link to="/Sobre"><FaSeedling />Sobre</Link></li>
            <li><Link to="/Servicos"><FaPagelines />Serviços</Link></li>
            <li><Link to="/Contato"><FaEnvelope />Contato</Link></li>
          </ul>
        </nav>
        {/*Comando da Rota:*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Rodape/>
    </div>
  );
}

export default App;
