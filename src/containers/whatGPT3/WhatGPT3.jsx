import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="CyberFusion: Conectando o Futuro"
        text="A CyberFusion é uma provedora de internet renomada, comprometida em oferecer serviços de alta qualidade e conectividade confiável para seus clientes. Com uma infraestrutura robusta e tecnologia de ponta, a CyberFusion se destaca no mercado de banda larga fixa." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">As possibilidades vão além da sua imaginação</h1>
      <p>Explore a Biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature
        title="Tecnologia de Ponta"
        text="A CyberFusion investe continuamente em infraestrutura e tecnologia para garantir velocidades rápidas e estabilidade. Oferecemos conexões via fibra óptica, ADSL e até mesmo via satélite, atendendo tanto áreas urbanas quanto regiões remotas."
      />
      <Feature
        title="Atendimento ao Cliente"
        text="Nosso compromisso com o cliente é incomparável. Nossa equipe técnica está pronta para resolver qualquer problema e garantir que nossos clientes desfrutem de uma experiência de internet sem interrupções."
      />
      <Feature
        title="Expansão e Inovação"
        text="A CyberFusion está sempre em busca de expansão e inovação. Estamos atentos às demandas do mercado e às mudanças nas preferências dos consumidores. Nosso objetivo é oferecer serviços acessíveis e de alta qualidade, mantendo-nos à frente das tendências tecnológicas."
      />
    </div>
  </div>
);

export default WhatGPT3;