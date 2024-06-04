import React from 'react'

import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
         <h4>Requira Acesso Antecipado para Começar</h4>
         <h1 className="gradient__text">As possibilidades vão além da sua imaginação.</h1>
         <p>A CyberFusion está comprometida com a responsabilidade ambiental. Investimos em fontes de energia renovável para alimentar nossa rede, minimizando nossa pegada de carbono e garantindo um planeta mais saudável.</p>
         <h4>Requira Acesso Antecipado para Começar</h4>
      </div>
    </div>
  )
}

export default Possibility