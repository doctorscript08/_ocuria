import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import '../../index.css'

const Footer = () => {

  return (

    <footer className="footer p_15">

      <div className="footer-links">

        <Link to="/home" > Home </Link>
        <Link to="/perfil"> Perfil </Link>
        <Link to="/entrar"> Entrar </Link>
        <Link to="/cadastrar"> Cadastrar </Link>
        <Link to="/definicoes"> Definições </Link>
        <Link to="/terminar-restaurante"> Terminar Sessão </Link>

      </div>

      <div className="footer-text d_flex">

        <p>Ocuria Menu</p>, 

        <p>2025 - Todos os Direitos Reservados. </p>

        <p>Desenvolvido por Alcateia Dev Tech.</p>

      </div>

    </footer>
  );
};

export default Footer;