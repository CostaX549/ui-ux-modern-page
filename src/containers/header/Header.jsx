import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/internetimage.jpg'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">CyberFusion: Para uma Internet Melhor</h1>
        <p>A CyberFusion é uma provedora de internet renomada, comprometida em oferecer serviços de alta qualidade e conectividade confiável para seus clientes. Com uma infraestrutura robusta e tecnologia de ponta, a CyberFusion se destaca no mercado de banda larga fixa.
        Nós investismos continuamente em infraestrutura e tecnologia para garantir velocidades rápidas e estabilidade. Oferecemos conexões via fibra óptica, ADSL e até mesmo via satélite, atendendo tanto áreas urbanas quanto regiões remotas.
</p>

        <div className="gpt3__header-content__input">
           <input type="email" placeholder="Seu E-mail" />
           <button type="button">Assine Agora</button>
        </div>
        <div className="gpt3__header-content__people">
           <img  src={people} alt="people" />
           <p>1,600 pessoas acessaram a páginas nas últimas 24 horas</p>
        </div>
       
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div> 
    </div>
  )
}

export default Header