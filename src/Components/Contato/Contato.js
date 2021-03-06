import React from 'react';
import { Helmet } from 'react-helmet';
import './Contato.css';
import img1 from '../../Assets/smartwatch-1.jpg';

const Contato = () => {
  return (
    <section className="contato efeito">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contato</title>
        <meta name="description" content="Página de contato!" />
      </Helmet>
      <div className="container">
        <div className="contato__item">
          <img src={img1} alt="smartwatch-1" />
          <div className="contato__text">
            <h1>Contato</h1>
            <p>Endereço: Rua fulano de tal</p>
            <p>Numero: 363</p>
            <p>Telefone: 999-999</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
