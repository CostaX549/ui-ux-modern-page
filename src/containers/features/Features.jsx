import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Melhore a conexão instantaneamente', 
    text: 'Acabe com o lag e o buffering com a nossa conexão de fibra ótica ultrarrápida. Assista a filmes em 4K, baixe arquivos enormes e jogue online sem interrupções - tudo na velocidade da luz.' 
  },
  {
    title: 'Conectividade sem interrupções', 
    text: 'Diga adeus a quedas frustrantes e olá para uma estabilidade sólida. Nossa infraestrutura de rede avançada garante que você esteja sempre conectado, esteja trabalhando, aprendendo ou se conectando com seus entes queridos.' 
  },
  {
    title: 'Dados ilimitados para liberar seu potencial', 
    text: 'Chega de se preocupar com limites de dados ou lentidão. A CyberFusion oferece planos de dados verdadeiramente ilimitados, para que você possa transmitir, baixar e explorar a web sem limitações.' 
  },
  {
    title: 'Potencialize sua casa inteligente', 
    text: 'Transforme seu espaço em um refúgio conectado. A CyberFusion se integra perfeitamente com dispositivos de casa inteligente, permitindo que você controle luzes, termostatos e eletrodomésticos com facilidade - tudo a partir do seu smartphone.' 
  },
 
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">O futuro é agora, evite estresses e lentidões na internet com a CyberFusion</h1>
        <p>Requira Acesso Antecipado Agora</p>
      </div>
      <div className="gpt3__features-container">
         {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}  />
         ))}
      </div>
    </div>
  )
}

export default Features